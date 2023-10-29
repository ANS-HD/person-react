var express = require('express');
var router = express.Router();
var db = require('../config/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/userList', (req, res, next) => {
  const params = req.query
  console.log(params);
  // sql查询user表
  db.query('SELECT * FROM user', [], function (results, fields) {
    // 以json的形式返回
    res.json({ results })
  })
})

module.exports = router;
