const test = require('tape')
const request = require('supertest')
const cheerio = require('cheerio')
const app = require('../server.js')

test('/ route', (t) => {
  request(app)
    .get('/')
    .end((err, res) => {
      t.equal(res.status, 302, "/ route redirecting to mural")
      t.end()
    })
})

test('mural page', (t) => {
  request(app)
    .get('/mural')
    .end((err, res) => {
      t.equal(res.status, 200, "Mural page loading")
      t.end()
    })
})
