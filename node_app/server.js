const express = require("express");
const app = express();
const PORT = 3000;

var todaysnum = 0;
//Routing
const userRouter = require("./routes/user")

// app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    // console.log("Hello get express");
    // res.send("<h1>こんにちは</h1>");
    // res.sendStatus(500);//サーバーエラー
    // res.sendStatus(400);//ファイルが見つけれない
    // res.status(500).send("エラーです。");
    // res.status(500).json({mes:"エラーです。"});
    todaysnum++
    console.log("来訪者です。")
    console.log(`${todaysnum}人目`)
    res.render("pages/index.ejs");

});

app.get("/user", userRouter);

app.listen(PORT, ()=> console.log("サーバーを起動しました。"));

