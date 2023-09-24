var mysql = require('mysql');
// 数据库连接配置
var pool = mysql.createPool({
  host: 'localhost',    // 数据库的地址
  user: 'root',         // 数据库用户名
  password: 'hhdd2023',     // 数据库密码
  database: 'reactTest'   // 数据库名称   
})

// 对数据库进行增删改查操作的基础
function query(sql, callback) {
  pool.getConnection((err, connection) => {
    connection.query(sql, (err, rows) => {
      callback(err, rows)
      connection.release()
    })
  })
}

exports.query = query