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
      $ = cheerio.load(res.text)
      // ----- //
      t.equal(res.status, 200, "Mural page loading")
      // ----- //
      let actual = $(".person").length
      t.equal(actual, 21, "Everyone displaying")
      // ----- //
      actual = $(".name").first().text()
      let expected = "JV"
      t.equal(actual, expected, "First name is what it's supposed to be")
      // ----- //
      t.end()
    })
})
