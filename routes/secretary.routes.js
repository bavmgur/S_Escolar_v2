const express = require('express')
const router = express.Router()

// const { SchoolYearController } = require('../controllers/index')

router.get('/payments', (req, res) => res.render('payments'))
    // router.post('/', SchoolYearController.createSchoolYear)
    // router.delete('/:id', SchoolYearController.deleteSchoolYear)

module.exports = router