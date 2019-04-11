const db = require('../models/index')

const Student = db['Student']

function getAllStudents(req, res) {
    Student.findAll()
        .then(students => {
            res.send(students)
        })
        .catch(err => {
            if (err) throw err
        })
}

function createStudent(req, res) {
    const body = req.body

    Classroom.create(body)
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
    deleteStudent
}