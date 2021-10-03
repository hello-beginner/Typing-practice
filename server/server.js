import express from "express";
import mysql from "mysql";
const app = express();
app.listen(8080, "127.0.0.1");
app.get("/data", (req, res) => {
  // 跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  let cont = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "user",
  });
  //  数据库 执行语句
  let sql = `select * from userName`;
  cont.query(sql, (err, data) => {
    if (err) console.log(err);
    data.forEach((e) => {
      res.send({
        code: 200,
        msg: "ok",
        e,
      });
    });
  });
});
