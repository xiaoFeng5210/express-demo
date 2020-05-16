import express from "express";
const app = express();
const port = 2333;

app.get("/", (req, res) => res.send("你好"));

app.listen(port, () => console.log(`服务器已启动 ${port}!`));
