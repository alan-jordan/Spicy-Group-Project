const fs = require('fs')

// readfile


function readPeople() {
    return fs.readFileSync('../people.json', 'utf8')
}

function findPerson(id) {
  var people = readPeople()
  return people.find((row) => {
    var personFound = row.find((person) => {
      return person["key"] == id
    })
    if (personFound["key"] == id) {
      return true
    }
  })
}

module.exports = {
  readPeople,
  findPerson
}
// writefile
// post


//an array called people
