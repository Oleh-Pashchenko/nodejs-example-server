const redis = require('redis');
const logger = require('./logger.service');
const client = redis.createClient(process.env.REDIS_URL);

client.on('error', function (err) {
  logger.error('Error ', err);
});

class Redis {
  static setUserToken(userId, token) {
    return client.set(userId, token, redis.print);
  }

  static getTokenAsync(token) {
    return client.getAsync(token);
  }
}

module.exports = Redis;