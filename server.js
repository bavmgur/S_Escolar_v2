const express = require('express')

/*const conn = require('./models/index').sequelize*/
const config = require('./config/config.dev')

const app = express()

require('./app')(app)

app.listen(config.PORT, () => console.log(`Aplicacion funcionando en el puerto ${config.PORT}`))

/*conn
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(config.PORT, () => console.log(`Aplicacion funcionando en el puerto ${config.PORT}`))
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })*/