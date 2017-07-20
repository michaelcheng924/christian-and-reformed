import express from 'express';
import request from 'request';
import { last } from 'lodash';
import { AppData } from 'app/server/db/user-schema';

// First time only
// AppData.findOne({ name: 'data' }, (err, result) => {
//     if (!result) {
//         const appData = new AppData({
//             name: 'data',
//             data: {
//                 orderSalvation: [{name: 'Michael', score: '1:01'}]
//             }
//         });

//         appData.save();
//     }
// });

const router = express.Router();

router.get('/getfbstats', (req, res) => {
    request('https://graph.facebook.com/v2.9/6102465974320/insights?fields=impressions,outbound_clicks,cost_per_outbound_click,spend&access_token=EAAGyJgQEiWMBAG1xdGjP8Ibxa54sNmlHtyAV76c7gjQYlFJQnmBvZC6ohNvdoZC2GYYRYLuy6ZCxFvllhps3zVHJTGaQTwsC5zav6bt40DOljnPW7j67PtCRhvHafnhvZBE4dBXW7QrQsfZCmYU7MTASpUT9HEJyzSakUZAbMHNgZDZD', (error, response, body) => {
        res.send(response);
    });

    // https://graph.facebook.com/v2.9/6102465974320/insights?fields=cost_per_result,reach,results,spend,today_spend&access_token=EAAGyJgQEiWMBAKYRX75F1Q11qGQ14qmUhsHI9SnEUKet89bFyT3UhpXQqJkZA1cBYkQYAqTF9jVzDGcu6vFii8xeiqrE0sb1x55LnVZArsFLJ03ieXHNjwmeYMlbSG6b3TrY3dNxcpZBiNet4E1hlPnVYEwiSbztAevZC7ifBw7Gp58XY5mZCx8WNwZAYG6tptMQ5Wr1xxxDxa7dONUMpl
});

router.post('/getscripture', (req, res) => {
    const scripture = req.body.scripture;

    request(`http://www.esvapi.org/v2/rest/passageQuery?key=IP&passage=${scripture}`, (error, response, body) => {
        res.send(response);
    });
});

router.post('/getappdata', (req, res) => {
    AppData.findOne({ name: 'data' }, (err, result) => {
        res.send({ appData: result.data });
    });
});

router.post('/addleaderboard', (req, res) => {
    const { leaderboardKey } = req.body;

    AppData.findOne({ name: 'data' }, (err, result) => {
        const data = result.data;
        data[leaderboardKey] = [];

        AppData.update({ name: 'data' }, {
            $set: {
                data
            }
        }, (err, result) => {
            res.send({
                appData: data
            });
        });
    });
});

function isTimeScoreValid(score) {
    if (!score.score || score.score.indexOf(':') === -1) {
        return false;
    }

    return true;
}

function isNewScoreBetter(currentScore, newScore) {
    const splitCurrentScore = currentScore.split(':');
    const splitNewScore = newScore.split(':');
    const currentScoreMin = Number(splitCurrentScore[0]);
    const currentScoreSec = Number(splitCurrentScore[1]);
    const newScoreMin = Number(splitNewScore[0]);
    const newScoreSec = Number(splitNewScore[1]);

    if (newScoreMin < currentScoreMin) {
        return true;
    }

    if (newScoreMin > currentScoreMin) {
        return false;
    }

    if (newScoreMin === currentScoreMin) {
        if (newScoreSec < currentScoreSec) {
            return true;
        }

        if (newScoreSec > currentScoreSec || newScoreSec === currentScoreSec) {
            return false;
        }
    }

    return false;
}

function getTimeScores(currentScores, score) {
    if (currentScores.length < 10) {
        currentScores.push(score);
    } else if (isNewScoreBetter(last(currentScores).score, score.score)) {
        currentScores.splice(9, 1);
        currentScores.push(score);
    }

    return currentScores.sort((a, b) => {
        return isNewScoreBetter(a.score, b.score) ? 1 : -1;
    });
}

function getNumberScores(currentScores, score) {
    if (currentScores.length < 10) {
        currentScores.push(score);
    } else if (score.score > last(currentScores).score) {
        currentScores.splice(9, 1);
        currentScores.push(score);
    }

    return currentScores.sort((a, b) => {
        return b.score > a.score ? 1 : -1;
    });
}

router.post('/addscore', (req, res) => {
    const { key, score } = req.body;

    const isTimeScore = key === 'orderSalvation' || key === 'bibleOrder';
    const isBoysGirls = key === 'boysGirls';

    if (
        (isTimeScore && !isTimeScoreValid(score))
        || (isBoysGirls && (typeof score.score !== 'number' || score.score > 135 || score.score <= 0))
    ) {
        res.send('Please stop :)');
    }

    AppData.findOne({ name: 'data' }, (err, result) => {
        const data = result.data;
        const keyData = data[key];

        if (keyData) {
            if (isTimeScore) {
                keyData.scores = getTimeScores(keyData, score);
            } else {
                keyData.scores = getNumberScores(keyData, score);
            }
        }

        AppData.update({ name: 'data' }, {
            $set: {
                data
            }
        }, (err, result) => {
            res.send({
                appData: data
            });
        });
    });
});

router.delete('/deletescore', (req, res) => {
    const { key, index } = req.body;

    AppData.findOne({ name: 'data' }, (err, result) => {
        const data = result.data;
        const scores = data[key];

        if (scores) {
            scores.splice(index, 1);
        }

        AppData.update({ name: 'data' }, {
            $set: {
                data
            }
        }, (err, result) => {
            res.send({
                appData: data
            });
        });
    });
});

router.post('/addcoursecount', (req, res) => {
    const { courseKey } = req.body;

    AppData.findOne({ name: 'data' }, (err, result) => {
        const data = result.data;
        data[courseKey] = 0;

        AppData.update({ name: 'data' }, {
            $set: {
                data
            }
        }, (err, result) => {
            res.send({
                appData: data
            });
        });
    });
});

router.post('/incrementcoursecount', (req, res) => {
    const { courseKey } = req.body;

    AppData.findOne({ name: 'data' }, (err, result) => {
        const data = result.data;
        data[courseKey]++;

        AppData.update({ name: 'data' }, {
            $set: {
                data
            }
        }, (err, result) => {
            res.send({
                appData: data
            });
        });
    });
});

router.post('/incrementscroll', (req, res) => {
    const { route } = req.body;

    AppData.findOne({ name: 'data' }, (err, result) => {
        const data = result.data;

        if (!data[route]) {
            data[route] = 0;
        }

        data[route]++;

        AppData.update({ name: 'data' }, {
            $set: {
                data
            }
        }, (err, result) => {
            res.send({
                appData: data
            });
        });
    });
});

export default router;
