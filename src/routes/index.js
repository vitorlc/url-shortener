const {Router} = require('express')
const urlController = require('../controllers/urlController')

const routes = Router()

routes.get('/urls', urlController.findAll)

routes.get('/shortUrl', urlController.shortUrl)

module.exports = routes