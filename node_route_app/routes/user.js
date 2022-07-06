const express = require("express");
const router = express.Router();

// user階層に入ってきてからの処理
router.get("/", (req, res) => {
    console.log("getリクエスト1階層目")
    //認証処理を挟むべき
    res.send("user階層です。");
})

router.get("/info",(req, res) => {
    res.send("user情報です。");
})

router.get("/uid/:uid", (req, res) => {
    res.send(req.params.uid)
})

// //ミドルウェア
// function mylogger(req, res, next){
//     console.log(req.orginalURL);
//     next();
// }

module.exports = router;