/*
 *白梦超
 *2016-06-01
 *layout页面路由
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

//layout页面路由
router.get("/", function(req, res, next) {

    res.render("../views/layout_list.html", {
        "common": "页面清单 - 元吉官网",
        "menu": "2"
    });
});


module.exports = router;
