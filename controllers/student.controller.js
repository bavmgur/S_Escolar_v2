const { Student, Assistance, sequelize, Sequelize } = require('../models/index')
const Op = Sequelize.Op

function getAllStudents(req, res) {
    Student.findAll({
            include: [{
                model: Assistance,
                attributes: [
                    [sequelize.fn('sum', sequelize.col('Assistance.state')), 'TotalAssistence'],
                    [sequelize.fn('count', sequelize.col('Assistance.state')), 'Total']
                ]

            }],
            group: ['Assistance.StudentId'],
            raw: true
        })
        .then(students => {
            res.send(students)
        })
        .catch(err => {
            if (err) throw err
        })
}

function getStudentByDni(req, res) {
    const params = req.params
    Student
        .findOne({
            where: { dni: params.dni }
        })
        .then(student => {

            Student.findOne({
                where: { id: student.id },
                include: [{
                    model: Assistance,
                    where: { StudentId: student.id }
                }],

            }).then(student => {

                if (student) {

                    res.status(200).json({
                        ok: true,
                        student: student
                    })
                }

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
            SchoolYear.destroy({
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