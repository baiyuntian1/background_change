/*
 *白梦超
 *2016-06-07
 *常见问题页面路由
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

//常见问题页面路由
router.get("/", function(req, res, next) {

   res.render("../views/Question.html", {
        "common":"常见问题 - 元吉官网",
        "menu":"5"
    });
});


module.exports = router;
