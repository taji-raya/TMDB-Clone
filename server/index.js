const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/userModel");
const jwt = require('jsonwebtoken');
const { response } = require('express');
const app = express();

app.use(cors());
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/TMDB-users');

const createToken = (_id) => {
    return jwt.sign({ _id }, 'secret', { expiresIn: '3d' });
}

const verify = (req, res, next) => {
    const authHeaders = req.headers.authorization; //when we send a request we must send the token in the header as (autherization)
    if (authHeaders) {
        const token = authHeaders.split(" ")[1]; //atheHeaders={"Bearer",token}
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return res.status(403).json("Invalid token");
            }
            req.user = decoded;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated");
    }
};
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.signup(username, email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        const userID = user._id
        res.status(200).json({ email, token, userID })
    }
    catch (error) {
        res.status(400).json({ error: 'Wrong Credentials' })
    }
});

app.post("/api/addToWatchList", verify, async (req, res) => {
    const user = await User.findOne({
        email: req.user.email,
    });
    const movie = req.body.movie;
    if (!movie) res.status(403).json("Missing body");
    const id = user._id;
    await User.updateOne({ _id: id }, { $push: { watchlist: movie } });
    if (!user) res.status(401).json("Not autherized");
    else res.status(200).json(await User.findById(user.id));
});

app.get("/api/watchlist", verify, async (req, res) => {
    const user = await User.findOne({
        email: req.user.email,
    });
    res.status(200).json(user.watchlist);
});

app.listen(8000, () => {
    console.log('Server Connected');
})