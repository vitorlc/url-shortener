const ShortId = require('shortid')
const request = require('supertest')

const app = require('../src/app')

const db = require('../src/models')
const Urls = db.urls

describe('List Urls', () => {

    it('should create new short url', async() => {
        const url = await Urls.create({
            original: 'https://github.com/vitorlc/url-shortener',
            shortUrl: 'localhost:3000/' + ShortId.generate(),
            clicks: 0
        })
        const response = await request(app)
            .post('/shortUrl')
            .send({
                url: 'https://github.com/vitorlc/url-shortener'
            })
        expect(response.status).toBe(200)
    })

    it('should list all urls', async() => {
        const response = await request(app)
            .get('/urls')
        console.log("response", response)
            
        expect(response.status).toBe(200)
    })
})
