'use strict';
module.exports = (sequelize, DataTypes) => {
  const part = sequelize.define('part', {
    part_id: DataTypes.INTEGER,
    part_name: DataTypes.STRING
  }, {timestamps: false,
      freezeTableName: true});
  part.associate = function(models) {
    // associations can be defined here
  };
  part.removeAttribute('id');
  return part;
};
