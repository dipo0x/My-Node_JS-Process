//Importing the Required module
const fs = require('fs');

//Our source stream
const readme = fs.createReadStream('./example/example.txt',  'utf8')
//Our Destination stream
const writeme = fs.createWriteStream('./example/example2.txt')

//Piping
readme.pipe(writeme)