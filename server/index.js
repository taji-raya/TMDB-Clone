const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/userModel");
const Movie = require('./models/MovieData')
const jwt = require('jsonwebtoken');
const app = express();
const path = require("path")

app.use(cors());
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/TMDB-users');

app.use(express.static(path.resolve(__dirname, "../client/build")));

const createToken = (_id) => {
    return jwt.sign({ _id }, 'secret', { expiresIn: '3d' });
}

const verify = (req, res, next) => {
    const authHeaders = req.headers.authorization;
    //when we send a request we must send the token in the header as (autherization)
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

//Add to watchlist 

app.post("/api/addToWatchList", verify, async (req, res) => {
    const { poster_path, title, release_date, movieId, media_type } = req.body;
    const userId = req.user._id;
    const checkMovie = await Movie.findOne({
        movieId: movieId,
        userId: userId,
    });
    if (checkMovie) {
        res.status(200).json({ msg: 'Already Exists' });
    }
    else {
        const addedToWatchlist = await Movie.create({
            movieId,
            userId,
            poster_path,
            title,
            release_date,
            media_type
        })
        res.status(200).json({ msg: 'Added succesfully' })
    }
});
//DELETE

app.delete('/api/Movie/:id', verify, async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findOneAndDelete({ movieId: id, userId: req.user._id });
        if (movie) {
            res.status(200).json({ msg: "deleted successfully" });
        } else {
            res.status(404).json({ msg: "not found!!!!!!" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "internal server error" });
    }
})

app.get("/api/Watchlist", verify, async (req, res) => {
    try {
        const movies = await Movie.find({ userId: req.user._id })
        res.send({ status: "ok", data: movies });
    } catch (error) {
        console.log(error)
    }

});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
})

app.listen(8000, () => {
    console.log('Server Connected');
})