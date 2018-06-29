var express = require('express')

var app = express()

app.get('/', function(req, res) {
  res.json({title: 'hello world'})
})

app.get('/notes/', function(req, res) {
  res.json({notes: "this is your notebook. Edit this to start saving your notes!"})
})

app.listen(3000, function () {
  console.log('Server started on port 3000')
})