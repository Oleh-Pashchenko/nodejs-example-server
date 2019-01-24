const { decrypt } = require('../services/crypto.service');

module.exports = async (req, res, next) => {
    if (req.headers.authorization) {
        req.headers.authorization =
            decrypt(req.headers.authorization);
    }

    return next();
};
