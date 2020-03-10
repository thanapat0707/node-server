'use strict';
module.exports = (sequelize, DataTypes) => {
  const part_of_kit = sequelize.define('part_of_kit', {
    kitid: DataTypes.STRING,
    part1: DataTypes.STRING,
    part2: DataTypes.STRING,
    part3: DataTypes.STRING,
    part4: DataTypes.STRING,
    part5: DataTypes.STRING,
    part6: DataTypes.STRING,
    part7: DataTypes.STRING,
    part8: DataTypes.STRING,
    part9: DataTypes.STRING,
    part10: DataTypes.STRING
  }, {timestamps: false,
    freezeTableName: true});
  part_of_kit.associate = function(models) {
    // associations can be defined here
  };
  part_of_kit.removeAttribute('id');
  return part_of_kit;
};
