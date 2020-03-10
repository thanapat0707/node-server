'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    user_id: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_image: DataTypes.STRING
  }, {timestamps: false,
      freezeTableName: true});
  users.associate = function(models) {
    // associations can be defined here
  };
  users.removeAttribute('id');
  return users;
};
