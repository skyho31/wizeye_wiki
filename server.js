var express = require('express');
var app = require('fs');

var app = express();
app.use(express.static('build'));
app.get('/', (req, res) => {
  res.renderFile('./build/index.html');
})


app.listen(8082, function(){
  console.log('de guide listening on port 8082');
})
