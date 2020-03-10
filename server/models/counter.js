'use strict';
module.exports = (sequelize, DataTypes) => {
  const counter = sequelize.define('counter', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    counter: DataTypes.INTEGER
  }, {timestamps: false,
      freezeTableName: true});
  counter.associate = function(models) {
    // associations can be defined here
  };
  counter.removeAttribute('id');
  return counter;
};
