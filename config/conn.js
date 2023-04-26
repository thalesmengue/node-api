const mongoose = require('mongoose').default;
require('dotenv').config()

async function main () {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error)
    }
}

module.exports = main