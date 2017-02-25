var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
* GET contactList.
*/
router.get('/contactList', function(req, res) {
  var db = req.db;
  var collection = db.get('contactList');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

/*
* POST to addContact.
*/
router.post('/addContact', function(req, res) {
  var db = req.db;
  var collection = db.get('contactList');
  collection.insert(req.body, function(err, result){
    res.send((err === null) ? { msg: '' } : { msg: err });
  });
});

/*
* DELETE to deleteContact.
*/
router.delete('/deleteContact/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('contactList');
  var id = req.params.id;
  collection.remove({"_id":id}, function(err, result){
  	res.send((err === null) ? { msg: '' } : { msg: err });
  });
});

module.exports = router;
