var express = require('express');
var app = require('fs');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
})

app.listen(8082, function(){
  console.log('de guide listening on port 8082');
})
