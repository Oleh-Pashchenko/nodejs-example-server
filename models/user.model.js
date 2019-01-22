module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,
    });

    return User;
};
