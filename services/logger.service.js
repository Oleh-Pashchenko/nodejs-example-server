const logger = require('winston');

class Logger {
    info(msg) {
        logger.info(msg);
    }

    error(msg) {
        logger.error(msg);
    }
}

module.exports = new Logger();