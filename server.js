const express = require('express');
const app = express();
const port = 9000;

// 用于处理静态文件，如前端构建后的资源文件
app.use(express.static('public'));

// 定义一个简单的API接口
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});