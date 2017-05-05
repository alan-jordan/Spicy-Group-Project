const express = require('express')
const app = require('./server')
const router = express.Router()
const people = require('./people.json')
const fileShare = require('./filesharing')


// ----- Routes ----- //

router.get('/', (req, res) => {
  res.redirect('/mural')
})

router.post('/mural/:id/edit', (req, res) => {
  var person = fileShare.findPerson(req.params.id)
  var sentTemplate = {
    person: person,
    people: people,
    opacity: 1,
    z: 1,
    view: "none",
    edit: "block"
  }

  res.render('people', sentTemplate)
})


router.get('/mural/:id', (req, res) => {
  var person = fileShare.findPerson(req.params.id)

  var sentTemplate = {
    person: person,
    people: people,
    opacity: 1,
    z: 1,
    view: "block",
    edit: "none"
  }

  res.render('people', sentTemplate)
})

router.get('/mural', (req, res) => {
  var sentTemplate = {
    person: {
      name: 0,
      image: 0,
      message: 0
    },
    people: people,
    opacity: 0,
    z: -1,
    view: "block",
    edit: "none"
  }

  res.render('people', sentTemplate)
})

module.exports = router
