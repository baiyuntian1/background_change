/*
 *白梦超
 *2016-06-07
 *加入我们页面路由
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

//加入我们页面路由
router.get("/", function(req, res, next) {

   res.render("../views/join_us.html", {
        "common":"加入我们 - 元吉官网",
        "menu":"7"
    });
});


module.exports = router;
