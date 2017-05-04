const fs = require('fs')

// readfile
fs.readFile('./people.json', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data);

} )

// writefile
// post
