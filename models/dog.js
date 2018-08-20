let Dog = (sequelize, DataTypes) => {
  let Dog = sequelize.define('dogs', {
    name: {
      type: DataTypes.STRING
    },
    breed: {
      type: DataTypes.STRING
    }
  })

  return Dog
}

export default Dog
