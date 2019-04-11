const express = require('express')
const router = express.Router()

const { SchoolYearController } = require('../controllers/index')

router.get('/', SchoolYearController.getAllSchoolYears)
router.post('/', SchoolYearController.createSchoolYear)
router.delete('/:id', SchoolYearController.deleteSchoolYear)

module.exports = router