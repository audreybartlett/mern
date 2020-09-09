const winston = require('winston');
//require('winston-mongodb');
require ('dotenv/config');

const customFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.prettyPrint(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

module.exports = {
  mjson: winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log'}),
        //new winston.transports.MongoDB({ db: process.env.DB_CONNECTION, level: 'error' })
    ],
    exceptionHandlers: [
      new winston.transports.File({ filename: 'logs/exceptions.log'})
    ],
    rejectionHandlers: [
      new winston.transports.File({ filename: 'logs/rejections.log'})
    ]
  }),
  simple: winston.createLogger({
    level: 'info',
    format: customFormat,
    transports: [
      new winston.transports.Console(),
    ],
    exceptionHandlers: [
      new winston.transports.Console()
    ],
    rejectionHandlers: [
      new winston.transports.Console()
    ]
  })
}