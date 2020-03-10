'use strict';
module.exports = (sequelize, DataTypes) => {
  const number_of_part = sequelize.define('number_of_part', {
    partname: DataTypes.STRING,
    number1: DataTypes.STRING,
    number2: DataTypes.STRING,
    number3: DataTypes.STRING,
    number4: DataTypes.STRING,
    number5: DataTypes.STRING,
    number6: DataTypes.STRING,
    number7: DataTypes.STRING,
    number8: DataTypes.STRING,
    number9: DataTypes.STRING,
    number10: DataTypes.STRING
  }, {timestamps: false,
      freezeTableName: true});
  number_of_part.associate = function(models) {
    // associations can be defined here
  };
  number_of_part.removeAttribute('id');
  return number_of_part;
};
