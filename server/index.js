const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/userModel");
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/TMDB-users')
app.post('/api/register', async (req, res) => {
    // console.log(req.body)
    try {
        const test = await User.create({
            username: req.body.username,
            email: req.body.email.toLowerCase(),
            password: req.body.password
        })
        res.json({ status: "ok", result: test });
    } catch (error) {
        res.json({ status: 'error', error: '????' });
    }
});

// app.post('/api/register', async (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         email: req.body.email.toLowerCase(),
//         password: req.body.password
//     });
//     user.save(function (err) {
//         if (err) {
//             res.json({ status: "ok", result: test });
//         } else {
//             res.json({ status: 'error', error: '????' });
//         }
//     })

// });

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if (user) {
            const token = jwt.sign({
                username: req.body.username,
                email: req.body.email,
            },
                'secret')
            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'server error idk' })
    }
});

app.listen(8000, () => {
    console.log('Server Connected');
})