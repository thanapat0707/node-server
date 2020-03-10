'use strict';

module.exports = ( sequelize, DataTypes) => {
  const partdata = sequelize.define('partdata', {
    partdata_id: DataTypes.STRING,
    part_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    location: DataTypes.STRING,
    time_base: DataTypes.INTEGER,
    time_use: DataTypes.INTEGER,
    counter_base: DataTypes.INTEGER,
    counter_use: DataTypes.INTEGER,
    convert_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    create_date: DataTypes.DATE,
    pm_date: DataTypes.DATE,
    update_date: DataTypes.DATE
  }, {timestamps: false,
      freezeTableName: true});
  partdata.associate = function(models) {
    // associations can be defined here
  };
  partdata.removeAttribute('id');
  return partdata;
};
