'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    name: DataTypes.STRING
  }, {});
  Owner.associate = function(models) {
    models.Owner.hasMany(models.Dog)
  };
  return Owner;
};
