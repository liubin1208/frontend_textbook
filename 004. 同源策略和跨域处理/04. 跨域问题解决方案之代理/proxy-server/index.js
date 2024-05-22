const express = require('express');
const app = express(); // 创建服务器

// 接受对路径 /hero 的 GET 请求
app.get('/hero', async (req, res) => {
  const axios = require('axios');

  const resp = await axios.get('https://pvp.qq.com/web201605/js/herolist.json');

  // 使用CORS解决对代理服务器的跨域
  res.header('access-control-allow-origin', '*');
  // 响应一段测试文本
  res.send(resp.data);
});

// 监听9527端口
app.listen(9527, () => {
  console.log('服务器已启动');
});
