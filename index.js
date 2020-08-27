const app = require('express')();
const http = require('http').createServer(app);
const express = require("express");
const bodyParser = require('body-parser');
const request = require('request');
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/public',{
  extensions: ['html', 'htm'],
}));
app.use(bodyParser.json());

app.get('/readJSON',function(req,res){
  let rawdata = request('http://f0302262.xsph.ru/config.json',function (error, response, body) {
    let data = JSON.parse(body);
    res.send(data);
  });
})

app.get('/config', function(req, res) {
  res.render('config'); 
});

// app.post('/saveToJSON',function(req,res){
//   let data = {
//     "team1" : req.body.team1,
//     "team2" : req.body.team2,
//     "gametype" : req.body.gameType,
//     "score1" : req.body.score1,
//     "score2" : req.body.score2,
//     "betTeam" : req.body.betTeam,
//     "betKof" : req.body.betKof,
//     "betPercent" : req.body.betPercent,
//     "betTeam2" : req.body.betTeam2,
//     "betKof2" : req.body.betKof2,
//     "betPercent2" : req.body.betPercent2,
//     "betTeam3" : req.body.betTeam3,
//     "betKof3" : req.body.betKof3,
//     "betPercent3" : req.body.betPercent3,
//     "win" : req.body.win,
//     "lose" : req.body.lose,
//     "win2" : req.body.win2,
//     "lose2" : req.body.lose2,
//     "draw" : req.body.draw,
//     "draw2" : req.body.draw2,
//     "color" : req.body.color,
//     "shadow" : req.body.shadow,
//     "shadowColor" : req.body.shadowColor,
//     "time" : req.body.time,
//     "textLine" : req.body.textLine,
//   }
//   let json = JSON.stringify(data);
//   request('http://f0302262.xsph.ru/')
//   res.json({success: true});
// })

io.on('connection', (socket) => {
  socket.broadcast.emit('update');
});

http.listen(process.env.PORT || 5000, () => {
  console.log('listening');
});