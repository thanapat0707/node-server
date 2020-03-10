'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('partlist', {
      partlist_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      packer_id: {
        type: Sequelize.STRING
      },
      sot_id: {
        type: Sequelize.STRING
      },
      allpart: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('partlist');
  }
};
