const express = require('express')
const app = express()
const conn = require('./config/conn');
const routes = require('./routes/index');

app.use(express.json())

conn();

app.use('/api', routes);

app.listen(3000, () => {
    console.log('worked');
});

module.exports = app

