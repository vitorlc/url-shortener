
const ShortId = require('shortid')
const db = require('../models')
const Urls = db.urls

module.exports = {
    
    async findAll(req, res) {
        try {
            const urls = await Urls.findAll()
            return res.status(200).send(urls)
        } catch(e) {
            return res.status(500).send({error: true, msg: "Não foi possível encontrar as urls"})
        }
    },

    async shortUrl(req, res) {
        try {
            const url = await Urls.create({
                original: req.body.url,
                shortUrl: ShortId.generate(),
                clicks: 0
            })
            return res.status(200).send(url)
        } catch(e) {
            return res.status(500).send({error: true, msg: "Não foi possível encurtar essa url"})
        }
    }
}