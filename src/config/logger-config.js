const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message,timestamp,error }) => {
  return `${timestamp} : ${level} : ${message}: ${error}`;
});


const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp({format:'yyyy-mm-dd hh:mm:ss'}),
    myFormat,
    
  ),
  transports: [
    new transports.Console(),
    new transports.File({filename: 'comined.log'})
  ]
});

module.exports = logger