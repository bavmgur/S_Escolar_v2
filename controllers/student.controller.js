const { Student, Assistance, sequelize, Sequelize } = require('../models/index')
const Op = Sequelize.Op

async function getAllStudents(req, res) {

    let students = await Student.findAll({
            include: [{
                model: Assistance,
                attributes: [
                    [sequelize.fn('Assistance.state*', sequelize.col('Assistance.state')), 'STATE'],
                    [sequelize.fn('count', sequelize.col('Assistance.state')), 'Total']
                ]

            }],
            group: ['Assistance.StudentId', 'Assistance.state'],
            raw: true
        })
        .catch(err => {
            if (err) throw err
        })
        // return students

    const objMapped = await students.reduce((acc, item) => {
        (acc[item.id] = acc[item.id] || []).push(item['Assistance.STATE'] == 1 ? { 'assistance': item } : { 'not-assistance': item })
        return acc;
    }, {});


    console.log(objMapped['1']);


    res.json(objMapped);
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