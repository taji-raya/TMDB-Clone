const mongoose = require('mongoose');
const Schema = mongoose.Schema

const watchlistSchema = new Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieID: {
        type: String,
        required: true
    },
    movieTitle: {
        type: String,
    },
    movieImage: {
        type: String,
    },

}, { timestamps: true })

module.exports = mongoose.model('WatchlistDB', watchlistSchema)
