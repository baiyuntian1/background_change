/*
 *白梦超
 *2016-06-01
 *关于我们页面路由
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

//关于我们页面路由
router.get("/", function(req, res, next) {

   res.render("../views/AboutUs.html", {
        "common":"关于我们 - 元吉官网",
        "menu":"2"
    });
});


module.exports = router;
