const redis = require('redis');
const {
    error
} = require('./logger.service');

const client = redis.createClient(process.env.REDIS_URL);

client.on('error', (err) => {
    error('Error ', err);
});

class Redis {
    static setUserToken(userId, token) {
        return client.set(userId, token, redis.print);
    }

    static async getTokenAsync(token) {
        return new Promise((resolve, reject) => {
            client.get(token, (err, reply) => {
                if (err) {
                    return reject(err);
                }

                return resolve(reply);
            });
        });
    }
}

module.exports = Redis;
