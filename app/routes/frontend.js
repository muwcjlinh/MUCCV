var express = require('express');
var router = express.Router();

router.get('/frontend', function(req, res) {
  var data = req.app.get('appData');
  var dataFe = req.app.get('appDataFe');
  var pagePhotos = [];
  var pageFe = dataFe.fe;

  data.data.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.photo);;
  });

  res.render('frontend', {
    pageTitle: "Front-end",
    artwork: pagePhotos,
    frontend: pageFe,
    pageID: 'frontendList'
  });
});

router.get('/frontend/:feid', function(req, res) {
  var data = req.app.get('appData');
  var dataFe = req.app.get('appDataFe');
  var pagePhotos = [];
  var pageFe = [];

  data.data.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.photo);;
  });

  dataFe.fe.forEach(function(item) {
    if (item.title == req.params.feid){
      pageFe.push(item);
    }
  });

  res.render('frontend', {
    pageTitle: "Front-end",
    artwork: pagePhotos,
    frontend: pageFe,
    pageID: 'frontendDetail'
  });
});

module.exports = router;
