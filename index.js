var express = require('express');
var path = require('path');

var app = express();
const port = process.env.PORT || 3000;

//app.use(express.static('frontend'));

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.sendFile(path.join(__dirname, 'frontend','index.html'));
});
