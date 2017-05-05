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
    res.render('mural', {opacity: 0, edit: 0})
})

router.get('/person/:id', (req, res) => { // this may change to query strings
  var person = fileShare.findPerson(req.params.id)
  res.render('mural', person, {opacity: 1, edit: 0})
})



router.post('/person/:id/edit', (req, res) => { // this may change to query strings
  var person = fileShare.findPerson(req.params.id)
  res.render('mural', person, {opacity: 1, edit: 1})
})
