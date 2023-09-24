var express = require('express');
var router = express.Router();
// 引入数据库配置文件
const db = require('./database')

// 获取数据库中的user表数据
router.get('/user', (err, res) => {
  const sql = 'SELECT * FROM user';
  db.query(sql, (err, result) => {
    console.log(sql);
      if(err){
          return;
      }
      // res：API传数据
      // result：返回的数据，需要转成JSON格式
      res.json(result); 
  }); 
}) 


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.render('index', { title: 'Express' });
});

module.exports = router;
