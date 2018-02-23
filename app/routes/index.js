var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var dataFe = req.app.get('appDataFe');
  var pageFe = dataFe.fe;
  var dataBe = req.app.get('appDataBe');
  var pageBe = dataBe.be;

  data.data.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.photo);;
  });

  res.render('index', {
    pageTitle: "Home",
    artwork: pagePhotos,
    frontend: pageFe,
    backend: pageBe,
    pageID: 'home'
  });

});

module.exports = router;
