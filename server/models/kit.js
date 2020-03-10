'use strict';
module.exports = (sequelize, DataTypes) => {
  const kit = sequelize.define('kit', {
    packer: DataTypes.STRING,
    packergroup: DataTypes.STRING,
    packerid: DataTypes.STRING,
    sot: DataTypes.STRING,
    package: DataTypes.STRING,
    kitid: DataTypes.STRING
  }, {timestamps: false,
      freezeTableName: true});
  kit.associate = function(models) {
    // associations can be defined here
  };
  kit.removeAttribute('id');
  return kit;
};
