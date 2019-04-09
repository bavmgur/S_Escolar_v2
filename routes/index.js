// Importamos las rutas
const homeRoutes = require('./home.routes')
module.exports = app => {
  // Aqui van las rutas para exportar
  app.use('/', homeRoutes)
}