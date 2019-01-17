const { OK } = require('http-status-codes');
const { create, getAll } = require('../db/user.db');
const { generateJWT } = require('../services/jwt.service');
const { setUserToken } = require('../services/redis.service');

exports.create = async ({ body }, res) => {
    const user = await create({
        username: body.username,
        password: body.password
    });
    const userId = user.getDataValue("id")
    const jwt = generateJWT(userId);
    
    setUserToken(userId, jwt.token);

    return res.json({
        code: OK,
        result: jwt,
    });
};

exports.getAll = async (req, res) => {
    const users = await getAll();

    return res.json({
        code: OK,
        result: users,
    });
};
