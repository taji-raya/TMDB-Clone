const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/userModel");
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/TMDB-users');

const createToken = (_id) => {
    return jwt.sign({ _id }, 'secret', { expiresIn: '3d' });
}
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
        res.status(200).json({ email, token })
    }
    catch (error) {
        res.status(400).json({ error: 'Wrong Credentials' })
    }
});

app.listen(8000, () => {
    console.log('Server Connected');
})