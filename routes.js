const express = require('express')
const app = require('./server')
const router = express.Router()
const people = require('./people.json')
const fileShare = require('./filesharing')




// ----- Routes ----- //

router.get('/', (req, res) => {
  res.redirect('/mural')
})

router.get('/mural', (req, res) => {
    res.render('people', {opacity: 0, edit: 0})
})

router.get('/person/:id', (req, res) => { // this may change to query strings
  var person = fileShare.findPerson(req.params.id)
  res.render('people', person, {opacity: 1, edit: 0})
})



router.post('/person/:id/edit', (req, res) => { // this may change to query strings
  var person = fileShare.findPerson(req.params.id)
  fileShare.editPerson(req.params.id, req.body)
  res.send('')
  res.redirect('/mural')
  // res.render('people', person, {opacity: 1, edit: 1})
})

module.exports = router
