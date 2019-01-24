const { compare, hash, genSalt } = require('bcrypt');

class BcryptService {
    static async comparePasswords(password, hashed) {
        return new Promise((resolve, reject) => {
            compare(password, hashed, (err, result) => {
                if (err) {
                    return reject(err);
                }

                return resolve(result);
            });
        });
    }

    static async generateSalt(saltRounds) {
        return new Promise((resolve, reject) => {
            genSalt(+saltRounds, (err, result) => {
                if (err) {
                    return reject(err);
                }

                return resolve(result);
            });
        });
    }

    static async hashPassword(password) {
        const salt = await BcryptService.generateSalt(process.env.SALT_ROUNDS);

        return new Promise((resolve, reject) => {
            hash(password, salt, (err, result) => {
                if (err) {
                    return reject(err);
                }

                return resolve(result);
            });
        });
    }
}

module.exports = BcryptService;
