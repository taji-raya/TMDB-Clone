const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const User = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    watchlist: { type: Array, unique: true }
},
    { collection: 'TMDB-users' })
User.statics.signup = async function (username, email, password) {
    if (!email || !password) {
        throw Error('Please fill in all the fields');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }
    try {
        const exists = await this.findOne({ email })
        if (exists) {
            throw Error('Email already in use');
        }
    }
    catch (e) {
        console.log(e)
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ username, email, password: hash });
    return user
}

User.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('Please fill in all the fields');
    }
    try {
        const user = await this.findOne({ email })
        if (!user) {
            throw Error('Email does not exist');
        }
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            throw Error('Wrong password');
        }
        return user;

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = mongoose.model('UserData', User);