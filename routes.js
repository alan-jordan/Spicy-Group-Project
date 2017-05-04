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
    res.render('mural', {opacity: 0})
})

router.get('/person/:id', (req, res) => { // this may change to query strings
  var person = findPeople(req.params.id)
  res.render('mural', person, {opacity: 1})
})

router.post('/person/:id/edit', (req, res) => { // this may change to query strings
  console.log(req.body);
  var person = findPeople(req.params.id)
  for(key in req.body )
  console.log(person[key]);
  res.render('mural', person, {opacity: 1})
}
})

findPeople = function(id) {
  return people.find((person) => person.id == id)
}
