const express = require('express')

const connection = require('./db') // 获取连接实例
const { port } = require('./config') // 获取启动参数

const app = express()

app.get('/', (req, res, next) => {
  /* 使用 connection.query 来执行 sql 语句 */
  // 第一个参数为 sql 语句，可以透过 js 自由组合
  // 第二个参数为回调函数，err 表示查询异常、第二个参数则为查询结果（这里的查询结果为多个用户行）
  connection.query('select * from user', (err, users) => {
    
    if (err) {
      res.send('query error')
    } else {
      console.log('mysql connected ......')
      // 将 MySQL 查询结果作为路由返回值
      res.send(users)
    }
  })
})

//创建表
app.get("/createpoststable",(req,res) => { // 访问该地址 createpoststable 会返回send内容
  let sql = "CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255),PRIMARY KEY(id))"
  connection.query(sql,(err,result) => {
      if(err) throw err;
      console.log(result);
      res.send('posts表已经建立')
  })
})


app.listen(port, () => {
  console.log(`express server listen at http://localhost:${port}`)
})
