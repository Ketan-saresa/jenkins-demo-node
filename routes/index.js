var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send('Hello user, this is Jenkins demo');
});

module.exports = router;
