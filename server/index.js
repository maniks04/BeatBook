var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var path = require('path')

app.use(express.static(__dirname + '/../client/dist'));
 app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/', function(req, res) {
  
})


app.post('/password', (req,  res) => {
  if (req.body.password === 'artist') {
    res.send('artist')
  } if (req.body.password === 'venue') {
    res.send('venue')
  } else {
    res.send(false)
  }
})
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist' + '/index.html'))
})

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});