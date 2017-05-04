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
  if(!req.query.id) {
    res.render('mural', {opacity: 0})
  } else {
    res.render('mural', {opacity: 1})
  }
})




router.get('/person/:id', (req, res) => { // this may change to query strings
  res.send('im a person')
})

router.get('/person/:id/edit', (req, res) => { // this may change to query strings
  res.send('im a person editor')
})
