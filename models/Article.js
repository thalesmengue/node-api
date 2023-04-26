const mongoose = require('mongoose').default;

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article