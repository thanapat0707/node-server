'use strict';
module.exports = (sequelize, DataTypes) => {
  const conversion = sequelize.define('conversion', {
    convert_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    sot_id: DataTypes.STRING,
    packer_id: DataTypes.STRING
  }, {timestamps: false,
      freezeTableName: true});
  conversion.associate = function(models) {
    // associations can be defined here
  };
  conversion.removeAttribute('id');
  return conversion;
};
