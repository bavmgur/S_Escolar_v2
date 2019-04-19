// Importamos las rutas
const HomeRoutes = require('./home.routes')
const StudentRoutes = require('./student.routes')
const SchoolYearRoutes = require('./schoolyear.routes')
const ClassroomRoutes = require('./classroom.routes')
const LoginRoutes = require('./login.routes')
const SecretaryRoutes = require('./secretary.routes')
const AssistanceRoutes = require('./assistance.routes')

module.exports = app => {
    // Aqui van las rutas para exportar
    app.use('/', HomeRoutes)
    app.use('/student', StudentRoutes)
    app.use('/classroom', ClassroomRoutes)
    app.use('/schoolyear', SchoolYearRoutes)
    app.use('/secretary', SecretaryRoutes)
    app.use('/assistance', AssistanceRoutes)

    app.use('/login', LoginRoutes)
}