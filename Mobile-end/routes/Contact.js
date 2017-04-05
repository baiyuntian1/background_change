/*
 *白梦超
 *2016-06-07
 *联系我们页面路由
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

//联系我们页面路由
router.get("/", function(req, res, next) {

   res.render("../views/Contact.html", {
        "common":"联系我们 - 元吉官网",
        "menu":"6"
    });
});


module.exports = router;
