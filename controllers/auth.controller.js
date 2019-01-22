const { verify } = require('../services/jwt.service');
const { INTERNAL_SERVER_ERROR, NOT_ACCEPTABLE } = require('http-status-codes');
const { getTokenAsync } = require('../services/redis.service');

module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization) return res.status(NOT_ACCEPTABLE).send('Need authorization token in header');

        const token = req.headers.authorization.replace('Bearer ', '');
        const verified = verify(token);
        const redisToken = await getTokenAsync(verified.id);
        const redisVerified = verify(redisToken);

        if (verified.id === redisVerified.id) {
            return next();
        }

        return res.status(NOT_ACCEPTABLE).json({ message: 'Session not found' });
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};
