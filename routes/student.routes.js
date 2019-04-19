const express = require('express')
const router = express.Router()

const { StudentController } = require('../controllers/index')

router.post('/', StudentController.createStudent)
router.get('/', StudentController.getAllStudents)
router.get('/dni/:dni', StudentController.getStudentByDni)

module.exports = router