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
  let username = req.body.username;
  let password = req.body.password;
  if (username === 'artist' && password === 'artist') {
    res.send('artist')
  } if (username === 'venue' && password === 'venue') {
    res.send('venue')
  }
})

/******************************** Calendar ***********************************/

app.post('/calendar', (req, res) => {
  console.log('req.body: ', req.body)
  let title = req.body.title;
  let description = req.body.description;
  let start = req.body.start;
  let end = req.body.end;
  res.status(200).end()
})

app.post('/dragAndDrop', (req, res) => {
  console.log('req.body: ', req.body)
  let id = req.body.eventId;
  let timeChange = req.body.timeChange;
  res.status(200).end()
})

app.get('/calendar', (req, res) => {
  testData = [
    {
      title: 'Tumble22',
      start: '2018-03-16T12:30:00',
      end: '2018-03-16T13:30:00',
      description: 'OG Southern Chicken Sandwhich, Dang hot, with a side of chips, for here please.',
      id: 1
    },
    {
      title: 'Happy Chick',
      start: '2018-03-17T11:30:00',
      end: '2018-03-16T12:30:00',
      description: 'Classic Chic, spicy, with honey siracha and ranch, to go please.',
      id: 2
    },
  ]
  res.status(200).send(testData).end()
})

/*****************************************************************************/

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist' + '/index.html'))
})

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});
