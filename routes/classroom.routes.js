const express = require('express')
const router = express.Router()

const { ClassroomController } = require('../controllers/index')

router.get('/', ClassroomController.getAllClassrooms)
router.post('/', ClassroomController.createClassroom)
router.delete('/:id', ClassroomController.deleteClassroom)

module.exports = router