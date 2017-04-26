var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;

function forceSSL(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.use(forceSSL);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function(error){ 
  console.info('Listening on port %s', port);
});
