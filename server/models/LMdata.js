'use strict';
module.exports = (sequelize, DataTypes) => {
  const LMdata = sequelize.define('LMdata', {
    LM_id: DataTypes.STRING,
    LM_name: DataTypes.STRING,
    LM_image: DataTypes.STRING
  }, {timestamps:false});
  LMdata.associate = function(models) {
    // associations can be defined here
  };
  LMdata.removeAttribute('id');
  return LMdata;
};
