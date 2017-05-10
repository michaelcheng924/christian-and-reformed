import express from 'express';
import request from 'request';

const router = express.Router();

router.post('/', (req, res) => {
    const scripture = req.body.scripture;

    request(`http://www.esvapi.org/v2/rest/passageQuery?key=IP&passage=${scripture}`, (error, response, body) => {
        res.send(response);
    });
});

export default router;
