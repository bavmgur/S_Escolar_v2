const express = require('express')
const router = express.Router()

const { AssistanceController } = require('../controllers/index')

// router.get('/', ClassroomController.getAllClassrooms)
router.post('/', AssistanceController.createAssistance)
router.get('/', AssistanceController.getIndex)
    // router.delete('/:id', ClassroomController.deleteClassroom)

module.exports = router