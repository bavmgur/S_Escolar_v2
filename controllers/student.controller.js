const { Student, Assistance, sequelize, Sequelize } = require('../models/index')
const Op = Sequelize.Op


async function getAllStudents(req, res) {

    const query = req.query

    let queryConfig = {}

    if (query['fecha_inicio'] && query['fecha_final']) {
        queryConfig = {
            createdAt: {
                [Op.between]: [query.fecha_inicio, query.fecha_final]
            }
        }

    }
    if (query['state']) {
        queryConfig = {
            [Op.and]: {
                createdAt: {
                    [Op.between]: [query.fecha_inicio, query.fecha_final]
                },
                state: query.state
            }
        }
    }

    let students = await Student.findAll({

            include: [{
                model: Assistance,
                group: [sequelize.col('Assistance.state')],
                attributes: [
                    [sequelize.fn('Assistance.state*', sequelize.col('Assistance.state')), 'state'],
                    [sequelize.fn('count', sequelize.col('Assistance.state')), 'Total']
                ],
                where: queryConfig,
                duplicating: false

            }],
            limit: 10,
            offset: (query.page || 1) * 10 - 10,
            group: [sequelize.col('Assistance.state'), sequelize.col('Assistance.StudentId')],

        })
        .catch(err => {
            if (err) throw err
        })
    students.map(item => {
        for (e in item.Assistance) {
            item.Assistance[e].state = item.Assistance[e].state == 1 ? 'Asistio' : 'Falto'
        }
    })
    res.json(students);
}

async function getStudentByDni(req, res) {
    const params = req.params
    await Student
        .findOne({
            where: { dni: params.dni }
        })
        .then(function(student) {
            if (!student) {
                return res.status(400).json({
                    ok: false,
                    message: 'No existe un alumno con este DNI'
                })
            }
            Student
                .findOne({
                    where: { id: student.id },
                    include: [{
                        model: Assistance,
                        where: { StudentId: student.id }
                    }],

                })
                .then(function(student) {
                    if (!student) {
                        return res.status(400).json({
                            ok: false,
                            message: 'No existe un alumno con este DNI'
                        })
                    }
                    res.status(200).json({
                        ok: true,
                        student: student
                    })

                })


        })
        .catch(err => {
            if (err) throw err
        })
}

function createStudent(req, res) {
    const body = req.body

    Student.create(body)
        .then(student => {
            res.send(student['dataValues'])
        })


}

function deleteStudent(req, res) {
    const params = req.params

    Student
        .findOne({
            where: { id: params.id }
        })
        .then(student => {
            Student.destroy({
                    where: { id: params.id }
                })
                .then(student => {
                    console.log("Estudiante eliminado", student)
                })
        })
}

module.exports = {
    getAllStudents,
    createStudent,
    deleteStudent,
    getStudentByDni
}