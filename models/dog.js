'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define('Dog', {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    OwnerId: DataTypes.INTEGER
  }, {});
  Dog.associate = function(models) {
    models.Dog.belongsTo(models.Owner, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Dog;
};
