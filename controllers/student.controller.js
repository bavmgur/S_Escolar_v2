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


    const dataStudents = await students.reduce((acc, item) => {

        acc[item.id] = acc[item.id] || item

        item['Assistance.STATE'] == 1 ? (acc[item.id]['assistance'] = item['Assistance.Total']) : (acc[item.id]['not-assistance'] = item['Assistance.Total'])

        acc[item.id]['assistance'] = acc[item.id]['assistance'] || 0
        acc[item.id]['not-assistance'] = acc[item.id]['not-assistance'] || 0

        acc[item.id]['total-assistance'] = acc[item.id]['assistance'] + acc[item.id]['not-assistance']

        delete acc[item.id]['Assistance.STATE']
        delete acc[item.id]['Assistance.Total']

        return acc;
    }, {});


    res.json(dataStudents);
}

function getStudentByDni(req, res) {
    const params = req.params
    Student
        .findOne({
            where: { dni: params.dni }
        })
        .then(student => {

            Student
                .findOne({
                    where: { id: student.id },
                    include: [{
                        model: Assistance,
                        where: { StudentId: student.id }
                    }],

                })
                .then(student => {

                    if (student) {

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