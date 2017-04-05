/*
 *白梦超
 *2016-06-07
 *旗下产品页面路由
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

//旗下产品页面路由
router.get("/", function(req, res, next) {

   res.render("../views/Product.html", {
        "common":"旗下产品 - 元吉官网",
        "menu":"3"
    });
});


module.exports = router;
