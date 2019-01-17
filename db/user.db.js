const { sequelize } = require('../models');

class User {
  static async create(user) {
    return await sequelize.models.Users.create(user);
  }

  static async getAll() {
    return await sequelize.models.Users.findAll({
        raw: true,
        attributes: ['id', 'username', 'age']
      });
  }
}

module.exports = User;
