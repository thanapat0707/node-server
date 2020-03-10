'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('packer', {
      packer_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      packer_type: {
        type: Sequelize.STRING
      },
      packer_group: {
        type: Sequelize.STRING
      },
      packer_uph: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('packer');
  }
};
