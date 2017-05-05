const express = require('express')
const app = require('./server')
const router = express.Router()
const people = require('./people.json')
const fileShare = require('./filesharing')


module.exports = router

// ----- Routes ----- //

router.get('/', (req, res) => {
  res.redirect('/mural')
})

router.get('/mural', (req, res) => {

})

router.get('/person/:id', (req, res) => { // this may change to query strings

  let id = req.params.id
  fileShare.readPerson(id, function (person) {
    console.log({person});
  })

})

router.post('/person/:id/edit', (req, res) => { // this may change to query strings
  res.send('im a person editor')
  console.log(req.body);
  var person = findPeople(req.params.id)
  for(key in req.body )
  console.log(person[key]);
})
