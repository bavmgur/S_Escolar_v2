const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')
const sassMiddleware = require('node-sass-middleware')

const routes = require('./routes/index')

const srcPath = __dirname + '/sass'
const destPath = __dirname + '/public'

module.exports = (app) => {

  app.engine('handlebars', expressHbs({ 
    defaultLayout: 'main',
  }))
  app.set('view engine', 'handlebars')

  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    prefix: '/prefix'
  }))
  app.use(express.static(path.join(__dirname, 'public')))

  routes(app)
}