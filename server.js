var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

//Middle ware should be specified towards the top
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('About Us Ya heard?!?!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT + '...');
});
