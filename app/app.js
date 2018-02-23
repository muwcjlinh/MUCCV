var express = require('express');
var app = express();
var dataFe = require('./data/fe.json');
var dataBe = require('./data/be.json');
var dataFile = require('./data/data.json')
var io = require('socket.io')();

//********** app.set
// tạo port
app.set('port', process.env.PORT || 3000);
// require data cho index
app.set('appData', dataFile);
// require data cho route frontend và backend
app.set('appDataFe', dataFe);
app.set('appDataBe', dataBe);
// tạo view engine và địa chỉ cụ thể chứa template ejs
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "Ryan Nguyen";
app.locals.allFe = dataFe.fe;
app.locals.allBe = dataBe.be;

//********** app.use
// chuyển app/public thành root để serve file trong public
app.use(express.static('app/public'));
// gọi route root
app.use(require('./routes/index'));
// gọi route frontend
app.use(require('./routes/frontend'));
// gọi route backend
app.use(require('./routes/backend'));
// gọi route Feedback
app.use(require('./routes/feedback'));
// gọi route api feedback
app.use(require('./routes/api'));
// gọi route chat
app.use(require('./routes/chat'));

// báo ra console về sever và port
var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

io.attach(server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});
