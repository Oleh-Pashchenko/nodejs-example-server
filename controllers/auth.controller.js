const { verify } = require('jsonwebtoken');
const { INTERNAL_SERVER_ERROR, NOT_ACCEPTABLE } = require('http-status-codes');

const { getTokenAsync } = require('../services/redis.service');

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) return res.status(NOT_ACCEPTABLE).send('Need authorization token in header');

    const token = req.headers.authorization.replace("Bearer ", "");
    const verified = verify(token, process.env.SESSION_SECRET);
    const redisToken = getTokenAsync(verified);

    if(verified === redisToken) {
      return next();
    }

    return res.status(NOT_ACCEPTABLE).json({ message: 'Session not found' });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
