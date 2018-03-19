const express = require('express');
const bodyParser = require('body-parser');
const url = require ('url');
const request = require('request')
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database/index.js');
require('../server/config/passport')(passport);
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_PASSWORD || 'supersecretsecret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static(__dirname + '/../app'));
// app.use(express.static(__dirname + '/../node_modules'));

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).end('You must log in to do that!');
}

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/', function(req, res) {
  
});

app.post('/login', passport.authenticate('local-login'), (req, res) => {
  res.status(200).json({
    user_id: req.user.user_id,
    username: req.user.username,
    session_id: req.sessionID
  });
});

app.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  res.clearCookie('connect.sid').status(200);
});


app.post('/password', (req,  res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (username === 'artist' && password === 'artist') {
    res.send('artist')
  } if (username === 'venue' && password === 'venue') {
    res.send('venue')
  }
})

/***********************************************************************/
/*                        login                                        */

// app.checkPassword = (userName, pw, checkPw) => {
//   return bcrypt.compareSync(pw, checkPw);
// };


// app.get('/login', async (req, res) =>{
//   let userName = req.query.username;
//   let userPass = req.query.password;

//   try {
//     let { password } = await db.retrieveUserPassword(userName);
//     if (app.checkPassword(userName, userPass, password)) {
//       req.session.loggedIn = true;
//       res.status(200).end();
//     } else {
//       console.log('Unmatching username and password');
//       res.status(200).json({ error: true, message: 'Sorry, username and password do not match! Please try again!' });
//     }
//   } catch (e) {
//     res.status(200).json({ error: true, message: 'Sorry, we didn\'t recognize that username. Please try again!' });
//   }
// });

// app.get('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
//   res.end();
// });


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist' + '/index.html'))
})

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});

