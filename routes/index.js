var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello express-api server!");
});

router.all("/test/:test_id", async function (req, res, next) {
  // 示范解析客户端请求
  // 由于之前注册了由 express.json() 方法创建的中间件
  // Request 对象就会以 JSON 格式提取请求体中的数据
  const query = JSON.stringify(req.query);
  const params = JSON.stringify(req.params);
  const body = JSON.stringify(req.body);
  const cookies = JSON.stringify(req.cookies);
  // 建立输出报告的模板字符串
  const out = `
      客户端主机名 ：${req.hostname} 
      客户端主机IP地址 ：${req.ip} 
      客户端请求类型 ：${req.method} 
      查询字符串 ：${query == "{}" ? "无" : query} 
      URL参数 ：${params == "{}" ? "无" : params} 
      表单数据 ：${body == "{}" ? "无" : body.data} 
      cookie数据 ：${cookies == "{}" ? "无" : cookies} 
      是否可请求HTML格式文件 ：${req.accepts("html") != false ? "是" : "否"} 
      是否可请求PNGx未知格式文件 ：${req.accepts("pngx") != false ? "是" : "否"}
  `;
  // 在服务器终端中输出报告
  console.log(out);
      // 示范响应客户端请求
    // 根据输出报告生成JSON格式的数据对象
    const items = out.split('\n');
    const jsonObj = {};
    // 请注意，此处使用了 await 语法
    await items.slice(1,-1).forEach(item => {
        // 请注意此处split()方法使用中文冒号做分隔符
        const key = item.split('：')[0].trim(); 
        const val = item.split('：')[1].trim();
        jsonObj[key] = val;
    });
    // 向客户端发送响应数据
    res.json(jsonObj);
});

module.exports = router;
