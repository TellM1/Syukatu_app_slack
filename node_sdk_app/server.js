const express = require("express");
const app = express();
const PORT = 3000;

//Routing
const userRouter = require("./routes/user")

// app.use(express.static("public"));
app.set("view engine", "ejs");

// GET method route
app.get("/", (req, res) => {
    console.log("getリクエスト0階層目")
    res.send("test")
});

app.get("/user", userRouter);

// POST method route
app.post('/', (req, res) => {
    console.log("postリクエスト0階層目")
    res.send("mes")
})

app.listen(PORT, ()=> console.log("サーバーを起動しました。"));

