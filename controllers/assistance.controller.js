const StudentController = require('./student.controller')

const { Assistance } = require('../models/index')




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

async function getIndex(req, res) {

    const students = await StudentController.getAllStudents(req, res)

    res.render('assistant-assistance', { students })
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
    getIndex
}