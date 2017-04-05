/*
 *高京
 *20160226
 *404
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

router.use(function(req, res, next) {
    var err = new Error('Not Found');
    res.render("../views/err/404.html", {
        "common":"404 - 元吉官网",
        "menu":"1"
    });
    //func.Error(res, err);
});

module.exports = router;
