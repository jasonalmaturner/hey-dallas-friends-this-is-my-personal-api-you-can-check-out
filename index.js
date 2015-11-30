var express = require('express'),
  app = express(),
  port = 9001,
  cors = require('cors'),
  bodyParser = require('body-parser'),
  middleware = require('./middleware'),
  controller = require('./controller');

app.use(bodyParser.json(), cors(), middleware.addHeader);
app.use(express.static(__dirname + '/public'));

app.get('/api/anything', controller.anything);
app.get('/api/name', controller.getName);
app.get('/api/hobbies', controller.getHobbies);
app.post('/api/hobbies', controller.addHobbie);

app.listen(port, function() {
  console.log('listening on port:', port);
});
