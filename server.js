var express = require('express');
var app = express();

app.use(express.static('build'))

app.listen(process.env.PORT || 5000, function() {
  console.log('App listenning on port', process.env.PORT || 5000);
})
