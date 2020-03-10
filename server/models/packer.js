'use strict';
module.exports = (sequelize, DataTypes) => {
  const packer = sequelize.define('packer', {
    packer_id: DataTypes.STRING,
    packer_type: DataTypes.STRING,
    packer_group: DataTypes.STRING,
    packer_uph: DataTypes.INTEGER
  }, {timestamps: false,
      freezeTableName: true});
  packer.associate = function(models) {
    // associations can be defined here
  };
  packer.removeAttribute('id');
  return packer;
};
