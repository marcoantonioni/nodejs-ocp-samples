var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('sample1 nodejs app, branch[main] version [1] !\n');
});

app.listen(8080, function () {
  console.log('sample app listening on port 8080!');
});
