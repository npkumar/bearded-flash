var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();

app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
