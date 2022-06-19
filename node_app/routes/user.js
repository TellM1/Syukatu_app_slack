const express = require("express");
const router = express.Router();

// router.use(mylogger);


router.get("/", mylogger, (req, res) => {
    res.send("userです。");
})

router.get("/info",(req, res) => {
    res.send("user情報です。");
})

router.get("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザー情報を取得しました。`)
})

//ミドルウェア
function mylogger(req, res, next){
    console.log(req.orginalURL);
    next();
}
module.exports = router;