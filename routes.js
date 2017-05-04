const express = require('express')
const app = require('./server')
const router = express.Router()
const people = require('./people.json')
const fs = require('fs')


module.exports = router

// ----- Routes ----- //

router.get('/', (req, res) => {
  res.redirect('/mural')
})

router.get('/mural', (req, res) => {
  res.send('im a mural')
})

// router.get('/submission', (req, res) => {
//   res.send('im a form')
// })

router.get('/person/:id', (req, res) => { // this may change to query strings
  res.send('im a person')
  var person = findPeople(req.params.id)
  res.render('person/edit', person)
})

router.post('/person/:id/edit', (req, res) => { // this may change to query strings
  res.send('im a person editor')
  console.log(req.body);
  var person = findPeople(req.params.id)
  for(key in req.body )
  console.log(person[key]);
}
})

findPeople = function(id) {
  return people.find((person) => person.id == id)
}
