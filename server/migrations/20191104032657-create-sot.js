'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sot', {
      sot_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      package_name: {
        type: Sequelize.STRING
      },
      package_width: {
        type: Sequelize.DOUBLE
      },
      package_length: {
        type: Sequelize.DOUBLE
      },
      package_thickness: {
        type: Sequelize.DOUBLE
      },
      package_cwidth: {
        type: Sequelize.DOUBLE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sot');
  }
};
