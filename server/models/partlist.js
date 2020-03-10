'use strict';
module.exports = (sequelize, DataTypes) => {
  const partlist = sequelize.define('partlist', {
    partlist_id: DataTypes.INTEGER,
    packer_id: DataTypes.STRING,
    sot_id: DataTypes.STRING,
    allpart: DataTypes.ARRAY(DataTypes.STRING)
  }, {timestamps: false,
      freezeTableName: true});
  partlist.associate = function(models) {
    // associations can be defined here
  };
  partlist.removeAttribute('id');
  return partlist;
};
