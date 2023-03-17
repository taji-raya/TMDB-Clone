const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users-db')
    .then(() => {

        console.log("Database Connected")
    })
    .catch(() => {
        console.log("Database Connection failed")
    });

const newSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model('collection', newSchema);

module.exports = collection