module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.addColumn(
        'Users',
        'age',
        Sequelize.INTEGER,
    ),

    down: queryInterface => queryInterface.removeColumn('Users', 'age'),
};
