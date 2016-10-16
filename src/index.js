const express = require('express')
const app = express()
const path = require('path')

console.log(path.join(__dirname))
//app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

// app.listen(80);
// console.log('Listening on port 80');
