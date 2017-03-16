var express = require('express');
var router = express.Router();

var messages= [
  {
    name: 'Username',
    message: 'Hi! Your message will appear here.'
  },
  // {
  //   name: 'Charmander',
  //   message: 'char char char'
  //
  // }
];


/* GET home page. */
router.get('/', function(req, res, next) {
 res.sendFile('index.html', { root: 'public' });
});

router.get('/message', function(req, res) {
  console.log("In Message");
  res.send(messages);
});

router.post('/message', function(req, res) {
    console.log("In Messages ");
    console.log(req.body);
    messages.unshift(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});


module.exports = router;
