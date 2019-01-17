'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        username: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        engine: 'MYISAM',                     // default: 'InnoDB'
        charset: 'latin1',                    // default: null
        schema: 'public'                      // default: public, PostgreSQL only.
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users') 
  }
};
