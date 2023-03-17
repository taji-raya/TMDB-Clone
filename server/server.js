const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const { connection } = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/LoginPage", cors(), (req, res) => {

})
app.post("/LoginPage", async (req, res) => {
    const { username, password } = req.body
    try {
        const check = await collection.findOne({ username: username })
        if (check) {
            res.json('exist');
        }
        else {
            res.json('does not exist')
        }

    } catch (e) {
        res.json('error')

    }
})

app.post("/RegisterPage", async (req, res) => {
    const { username, password } = req.body
    const data = {
        username: username,
        password: password
    }
    try {
        const check = await collection.findOne({ username: username })
        if (check) {
            res.json('exist');
        }
        else {
            res.json('does not exist')
            await collection.insertMany([data])
        }

    } catch (e) {
        res.json('error')

    }
})

app.listen(8000, () => {
    console.log('Port Connected');

})