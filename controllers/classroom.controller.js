const db = require('../models/index')

const Classroom = db['Classroom']

function getAllClassrooms(req, res) {
    Classroom.findAll()
        .then(classrooms => {
            res.send(classrooms)
        })
        .catch(err => {
            if (err) throw err
        })
}

function createClassroom(req, res) {
    const body = req.body

    Classroom.create(body)
        .then(classroom => {
            res.send(classroom['dataValues'])
        })


}

function deleteClassroom(req, res) {
    const params = req.params

    Classroom
        .findOne({
            where: { id: params.id }
        })
        .then(classroom => {
            SchoolYear.destroy({
                    where: { id: params.id }
                })
                .then(classroom => {
                    console.log("Estudiante eliminado", classroom)
                })
        })
}

module.exports = {
    getAllClassrooms,
    createClassroom,
    deleteClassroom
}