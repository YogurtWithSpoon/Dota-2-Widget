const app = require('express')();
const http = require('http').createServer(app);
const express = require("express");
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
var admin = require("firebase-admin");
var serviceAccount = require("./dota2widget-firebase-adminsdk-b7xaj-a910db081f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dota2widget.firebaseio.com"
});

var database = admin.database();

app.use(express.static(__dirname + '/public',{
  extensions: ['html', 'htm'],
}));

app.use(bodyParser.json());

app.get('/readJSON',function(req,res){
    let information = database.ref('/')
    information.once('value').then(function(snapshot) {
      res.send(snapshot.val());
    });
})

app.get('/config', function(req, res) {
  res.render('config'); 
});

app.post('/saveToJSON',function(req,res){
  database.ref('/').set({
    "team1" : req.body.team1,
    "team2" : req.body.team2,
    "gametype" : req.body.gameType,
    "score1" : req.body.score1,
    "score2" : req.body.score2,
    "betTeam" : req.body.betTeam,
    "betKof" : req.body.betKof,
    "betPercent" : req.body.betPercent,
    "betTeam2" : req.body.betTeam2,
    "betKof2" : req.body.betKof2,
    "betPercent2" : req.body.betPercent2,
    "betTeam3" : req.body.betTeam3,
    "betKof3" : req.body.betKof3,
    "betPercent3" : req.body.betPercent3,
    "win" : req.body.win,
    "lose" : req.body.lose,
    "win2" : req.body.win2,
    "lose2" : req.body.lose2,
    "draw" : req.body.draw,
    "draw2" : req.body.draw2,
    "color" : req.body.color,
    "shadow" : req.body.shadow,
    "shadowColor" : req.body.shadowColor,
    "time" : req.body.time,
    "textLine" : req.body.textLine,
  });
})

io.on('connection', (socket) => {
  socket.broadcast.emit('update');
});

http.listen(process.env.PORT || 5000, () => {
  console.log('listening');
});