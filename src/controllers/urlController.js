
const ShortId = require('shortid')
const db = require('../models')
const Urls = db.urls

module.exports = {
    
    async findAll(req, res) {
        try {
            const urls = await Urls.findAll()
            return res.status(200).send(urls)
        } catch(e) {
            console.log(e)
            return res.status(500).send({error: true, msg: "Não foi possível encontrar as urls"})
        }
    },

    async shortUrl(req, res) {
        try {
            const host = req.get('host')
            const url = await Urls.create({
                original: req.body.url,
                shortUrl: host + '/' + ShortId.generate(),
                clicks: 0
            })
            return res.status(200).send(url)
        } catch(e) {
            console.log(e)
            return res.status(500).send({error: true, msg: "Não foi possível encurtar essa url"})
        }
    },

    async redirectUrl(req, res) {
        try {
            const host = req.get('host')
            const url = await Urls.findOne({
                where : {
                    shortUrl: host + '/' + req.params.shortUrl
                } 
            })
            if (url == null) return res.status(404).send({msg: 'Url não encontrada'})
            url.clicks+=1
            url.save()
            return res.redirect(url.original)
        } catch(e) {
            console.log(e)
            return res.status(500).send({error: true, msg: "Não foi possível redirecionar para essa url"})
        }
    }
}