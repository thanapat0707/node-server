'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('partdata', {
      partdata_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      part_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      time_base: {
        type: Sequelize.INTEGER
      },
      time_use: {
        type: Sequelize.INTEGER
      },
      counter_base: {
        type: Sequelize.INTEGER
      },
      counter_use: {
        type: Sequelize.INTEGER
      },
      convert_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      create_date: {
        type: Sequelize.DATE
      },
      pm_date: {
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('partdata');
  }
};
