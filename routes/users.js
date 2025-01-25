var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource, hello qseer");
});

// 用户注册
router.post("/newuser", function (req, res, next) {
  res.send("用户注册");
});

// 用户登录
router.post("/session", function (req, res, next) {
  res.send("用户登录");
});

// 查看用户信息
router.get("/:id", function (req, res, next) {
  res.send(`查看用户${req.params.id}的信息`);
});

// 修改用户信息
router.put("/:id", function (req, res, next) {
  res.send(`修改用户${req.params.id}的信息`);
});

// 删除用户信息
router.delete("/:id", function (req, res, next) {
  res.send(`删除用户${req.params.id}的信息`);
});

module.exports = router;
