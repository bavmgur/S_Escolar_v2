const { SchoolYear } = require('../models/index')

function getAllSchoolYears(req, res) {
    SchoolYear.findAll()
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            if (err) throw err
        })
}

function createSchoolYear(req, res) {
    const body = req.body

    SchoolYear.create(body)
        .then(student => {
            res.send(student['dataValues'])
        })


}

function deleteSchoolYear(req, res) {
    const params = req.params

    SchoolYear
        .findOne({
            where: { id: params.id }
        })
        .then(schoolYear => {
            SchoolYear.destroy({
                    where: { id: params.id }
                })
                .then(schoolYear => {
                    console.log("Estudiante eliminado", schoolYear)
                })
        })
}

module.exports = {
    getAllSchoolYears,
    createSchoolYear,
    deleteSchoolYear
}