const jwt = require('jsonwebtoken');

class JWTService {
    static generateJWT(id) {
        const token = jwt.sign({ id }, process.env.ACCESS_SECRET, {
            expiresIn: '1h',
        });
        const refreshToken = jwt.sign({ id }, process.env.REFRESH_SECRET, {
            expiresIn: '7d',
        });
        const accessTokenExpiredAt = (jwt.decode(token)).exp;

        return {
            token, refreshToken, accessTokenExpiredAt,
        };
    }

    static verify(data) {
        return jwt.verify(data, process.env.ACCESS_SECRET);
    }
}

module.exports = JWTService;
