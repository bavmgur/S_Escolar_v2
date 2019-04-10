const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home.controller')

router.get('/', homeController.getIndex)
router.get('/test', (req, res) => res.render('test'))

module.exports = router