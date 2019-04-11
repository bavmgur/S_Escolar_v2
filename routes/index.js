// Importamos las rutas
const homeRoutes = require('./home.routes')
const studentRoutes = require('./student.routes')
const schoolYearRoutes = require('./schoolyear.routes')
const ClassroomRoutes = require('./classroom.routes')
const LoginRouter = require('./login.routes')

module.exports = app => {
    // Aqui van las rutas para exportar
    app.use('/', homeRoutes)
    app.use('/student', studentRoutes)
    app.use('/classroom', ClassroomRoutes)
    app.use('/schoolyear', schoolYearRoutes)

    app.use('/login', LoginRouter)
}