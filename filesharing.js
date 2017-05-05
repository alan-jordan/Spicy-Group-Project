const fs = require('fs')

// readfile


function readPeople() {
    return JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'))
}

function findPerson(id) {
  var people = readPeople()
  var correctRow = people.find((row) => {
    return row.find((person) => {
      return person["id"] == id
    })
  })
  return correctRow.find((person => {
    return person["id"] == id
  }))
}

module.exports = {
  readPeople,
  findPerson
}
// writefile
// post


//an array called people
