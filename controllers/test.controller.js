const { OK } = require('http-status-codes');
const { test } = require('../services/test.service');


exports.test = (req, res) => {
    const message = test();

    return res.json({
        code: OK,
        message,
    });
};
