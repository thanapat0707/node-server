'use strict';
module.exports = (sequelize, DataTypes) => {
  const sot = sequelize.define('sot', {
    sot_id: DataTypes.STRING,
    package_name: DataTypes.STRING,
    package_width: DataTypes.DOUBLE,
    package_length: DataTypes.DOUBLE,
    package_thickness: DataTypes.DOUBLE,
    package_cwidth: DataTypes.DOUBLE
  }, {timestamps: false,
      freezeTableName: true});
  sot.associate = function(models) {
    // associations can be defined here
  };
  sot.removeAttribute('id');
  return sot;
};
