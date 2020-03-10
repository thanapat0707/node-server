'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    packer: DataTypes.STRING,
    packergroup: DataTypes.STRING,
    packerid: DataTypes.STRING,
    sot: DataTypes.STRING,
    package: DataTypes.STRING,
    user_id: DataTypes.STRING,
  }, {timestamps: false,
      freezeTableName: true});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};
