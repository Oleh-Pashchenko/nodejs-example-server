const { decrypt } = require('../services/crypto.service');

module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        req.headers.authorization = decrypt(req.headers.authorization);
    }

    return next();
};
