const test = require('tape')
const request = require('supertest')
const cheerio = require('cheerio')
const app = require('../server.js')
const fileShare = require('../filesharing.js')

test('/ route', (t) => {
  request(app)
    .get('/')
    .end((err, res) => {
      t.equal(res.status, 302, "/ route redirecting to mural")
      t.end()
    })
})

// test('mural page', (t) => {
//   request(app)
//     .get('/mural')
//     .end((err, res) => {
//       $ = cheerio.load(res.text)
//       // ----- //
//       t.equal(res.status, 200, "Mural page loading")
//       // ----- //
//       let actual = $(".person").length
//       t.equal(actual, 21, "Everyone displaying")
//       // ----- //
//       actual = $(".name").first().text()
//       let expected = "JV"
//       t.equal(actual, expected, "First name is what it's supposed to be")
//       // ----- //
//       t.end()
//     })
// })

test('POST /person/:id/edit', (t) => {
  request(app)
    .post('/person/5/edit')
    .send({name: 'Jeeves'})
    .end((err, res) => {
      t.pass()
      console.log(res.headers.location);
      console.log(res.status);
      t.end()
    })
})


test('File sharing working', (t) => {
  let actual = fileShare.findPerson(5)["name"]
  let expected = "Hannah"
  t.equal(actual, expected, "Find person correct")
  t.end()
})
