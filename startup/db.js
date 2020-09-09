const logger = require('../logger');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
    const db = config.get('db');
    mongoose.connect(db, 
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, })
        .then(() => logger.simple.info(`Connected to ${db}!`))
}