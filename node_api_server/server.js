const express = require("express");
const app = express();
app.use(express.json());//Json fileをあつけかえるようになる

app.listen(3000, console.log("サーバー開始"));

app.get("/", (req, res) => {
    res.send("テストてすと");
});

app.get("/api/slackbots", (req, res) =>{
    //ここにapiとしてたたかれた後の処理を描く
})