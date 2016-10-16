const express = require('express')
const app = express()
const path = require('path')

app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.use(express.static(path.join(__dirname, 'dist', 'public')))

const port = process.argv[2] || 8000
app.listen(port)
console.log(`Listening on port ${port}`)
