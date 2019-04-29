const { Assistance, Sequelize, sequelize } = require('../models/index')
const Op = Sequelize.Op




// function getAllStudents(req, res) {
//     Assistance.findAll()
//         .then(students => {
//             res.send(students)
//         })
//         .catch(err => {
//             if (err) throw err
//         })
// }

function createAssistance(req, res) {
    const body = req.body

    Assistance.create(body)
        .then(assistance => {
            res.send(assistance['dataValues'])
        })


}

async function getAllAssistancesByStudent(req, res) {
    const query = req.query
    console.log(query)
    let assistances = []
    let queryConfig = {}


    if (!query.cod_alumno) {
        return res.status(404).json({
            ok: false,
            message: 'No existe un alumno con este id'
        })
    }

    queryConfig = {
        where: {
            StudentId: query.cod_alumno

        },
        limit: 10,
        offset: (query.page || 1) * 10 - 10,
        raw: true
    }

    if (query['fecha_inicio'] && query['fecha_final']) {
        queryConfig = {

            attributes: [
                'id', 'hour', 'state', [sequelize.fn('date_format', sequelize.col('createdAt'), '%Y-%m-%d'), 'date']
            ],
            where: {
                createdAt: {
                    [Op.between]: [query.fecha_inicio, query.fecha_final]
                },
                StudentId: query.cod_alumno

            },
            raw: true
        }
    }

    assistances = await Assistance.findAndCountAll(queryConfig)
        .catch(err => {
            if (err) throw err
        })

    assistances.rows.map(item => item.state = (item.state == 0 ? "Falto" : "Asistio"))

    res.status(200).json({
        ok: true,
        assistances
    })
}

// function deleteStudent(req, res) {
//     const params = req.params

//     Student
//         .findOne({
//             where: { id: params.id }
//         })
//         .then(student => {
//             SchoolYear.destroy({
//                     where: { id: params.id }
//                 })
//                 .then(student => {
//                     console.log("Estudiante eliminado", student)
//                 })
//         })
// }

module.exports = {
    createAssistance,
    getAllAssistancesByStudent
}