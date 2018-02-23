var express = require('express');
var router = express.Router();

router.get('/backend', function(req, res) {
  var data = req.app.get('appData');
  var dataBe = req.app.get('appDataBe');
  var pagePhotos = [];
  var pageBe = dataBe.be;

  data.data.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.photo);;
  });

  res.render('backend', {
    pageTitle: "Back-end",
    artwork: pagePhotos,
    backend: pageBe,
    pageID: 'backendList'
  });
});

router.get('/backend/:beid', function(req, res) {
  var data = req.app.get('appData');
  var dataBe = req.app.get('appDataBe');
  var pagePhotos = [];
  var pageBe = [];

  data.data.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.photo);;
  });

  dataBe.be.forEach(function(item) {
    if (item.title == req.params.beid){
      pageBe.push(item);
    }
  });

  res.render('backend', {
    pageTitle: "Back-end",
    artwork: pagePhotos,
    backend: pageBe,
    pageID: 'backendDetail'
  });
});

module.exports = router;
