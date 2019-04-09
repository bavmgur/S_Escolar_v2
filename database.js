const Sequelize = require('sequelize')

module.exports = {
  connectDB: function() {

    const sequelize = new Sequelize('prueba', 'root', '', {
      host: 'localhost',
      dialect: 'mysql'
    })

    return sequelize
  }
}