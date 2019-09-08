var winston = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, label, printf } = winston.format;

var transport = new (winston.transports.DailyRotateFile)({
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  dirname: "./logs/"
});

var logger = winston.createLogger({ 
    transports: [
        transport
    ]
});

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

logger.add(new winston.transports.Console({
    format: combine(
      label({ label: 'API:' }),
      timestamp(),
      myFormat
    )
}));

module.exports = logger;