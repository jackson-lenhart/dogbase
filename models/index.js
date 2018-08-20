import path from 'path'
import Sequelize from 'sequelize'

let sequelize = new Sequelize('jackson-lenhart', 'jackson-lenhart', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
})

let models = {
  Sequelize,
  sequelize,
  Dog: sequelize.import(path.join(__dirname, 'dog.js'))
}

export default models
