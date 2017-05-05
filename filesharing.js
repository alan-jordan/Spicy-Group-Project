const fs = require('fs')
var people = readPeople()



function readPeople() {
 return JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'))

}

function findPerson(id) {
  var correctRow = people.find((row) => {
    return row.find((person) => {
      return person["id"] == id
    })
  })
  return correctRow.find((person => {
    return person["id"] == id
  }))
}



function editPerson (id, newData) {
  var person = findPerson(id)
  for(key in newData){
    person[key] = newData[key]
  }
  console.log(person);
}


module.exports = {
  readPeople,
  editPerson,
  findPerson
}
