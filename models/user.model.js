const { hashPassword } = require('../services/bcrypt.service');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,
    }, {
        instanceMethods: {
            generateHash: async password => new Promise(async (resolve) => {
                const hashedPassword = await hashPassword(password);
                resolve(hashedPassword);
            }),
        },
        hooks: {
            beforeCreate: user => user._modelOptions.instanceMethods.generateHash(user.password)
                .then((hash) => {
                    const self = user;
                    self.password = hash;
                }),
        },
    });

    return User;
};
