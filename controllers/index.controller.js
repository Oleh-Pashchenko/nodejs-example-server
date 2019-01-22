const { OK } = require('http-status-codes');
const { index } = require('../services/index.service');

exports.index = (req, res) => {
    const message = index();

    return res.json({
        code: OK,
        message,
    });
};
