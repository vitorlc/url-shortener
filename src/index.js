require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
app.use(morgan('short'))
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
