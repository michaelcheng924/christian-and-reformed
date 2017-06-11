import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import crypto from 'crypto';
import { sendUsers } from 'app/server/routes/users/utils';
import { AppData, User } from 'app/server/db/user-schema';

const secret = 'blah bleh';

const router = express.Router();

router.get('/', (req, res) => {
    sendUsers(res);
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, result) => {
        if (!result) {
            res.status(400).send({
                errorMessage: 'Invalid email.'
            });
            return;
        }

        bcrypt.compare(password, result.password, (err, passwordMatches) => {
            if (passwordMatches) {
                res.send({
                    user: email,
                    userData: result.data,
                    token: jwt.encode(email, secret)
                });
            } else {
                res.status(400).send({
                    errorMessage: 'Incorrect password.'
                });
            }
        });
    });
});

router.post('/loginwithtoken', (req, res) => {
    const { token } = req.body;

    const email = jwt.decode(token, secret);

    User.findOne({ email }, (err, result) => {
        if (!result) {
            res.status(400).send({
                errorMessage: 'Invalid token.'
            });
            return;
        }

        AppData.findOne({ name: 'data' }, (err, result1) => {
            const data = result1.data;
            
            res.send({
                user: email,
                userData: data
            });
        });
    });
});

router.post('/signup', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, result) => {
        if (result) {
            res.status(400).send({
                errorMessage: 'A user with this email already exists.'
            });
            return;
        }

        bcrypt.hash(password, 8, (err, hash) => {
            const user = new User({
                email,
                password: hash,
                data: {
                    'catechismBoysGirls': 1
                }
            });

            user.save(err => {
                res.send({
                    user: email,
                    userData: {},
                    token: jwt.encode(email, secret)
                });
            });
        });
    });
});

// router.post('/updatecourse', (req, res) => {
//     const { course, courseData, email } = req.body;

//     User.findOne({ email }, (err, result) => {
//         const newData = {
//             ...result.data,
//             [course]: courseData
//         };

//         User.update({ email }, {
//             $set: {
//                 data: newData
//             }
//         }, (err, result) => {
//             res.send({
//                 user: email,
//                 userData: newData
//             });
//         });
//     });
// });

// router.post('/passwordresetemail', (req, res) => {
//     const { email } = req.body;

//     User.update({ email }, (err, result) => {
//         if (!result) {
//             res.status(400).send({
//                 errorMessage: 'Email does not exist.'
//             });
//             return;
//         }

//         const hash = crypto.randomBytes(10).toString('hex');

        
//     });
// });

// ******* ADMIN *********

router.get('/allusers', (req, res) => {
    User.find({}, (err, results) => {
        res.send({ users: results });
    });
});

router.delete('/delete', (req, res) => {
    const { email } = req.body;

    User.remove({ email }, (err, result) => {
        User.find({}, (err, results) => {
            res.send({ users: results });
        });
    });
});

export default router;
