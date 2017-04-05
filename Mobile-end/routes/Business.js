/*
 *白梦超
 *2016-06-07
 *商务合作页面路由
 */
var express = require('express');
var router = express.Router();
var config = require('../handle/config.js');
var func = require('../handle/functions.js');

//商务合作页面路由
router.get("/", function(req, res, next) {

   res.render("../views/Business.html", {
        "common":"商务合作 - 元吉官网",
        "menu":"4"
    });
});

//表单验证
router.post("/submit", function(req, res, next) {
    var company=req.body["company"];
    var phone=req.body["phone"];
    var name=req.body["name"];
    var email=req.body["email"];
    var code=req.body["code"].toLowerCase();
    var code_ture=req.session.captcha.toLowerCase();
    //res.json({num:1});
    if (code!=code_ture){
    	res.send("1");
    	return;
    }
    else if(company==''){
    	res.send("2");
    	return;
    }
    else if(phone==''){
    	res.send("3");
    	return;
    }
    else if(name==''){
    	res.send("4");
    	return;
    }
    else if(email==''){
    	res.send("5");
    	return;
    }
    else {
    	res.send("6");
    	var json_send = func.JsonUnicode({
	        "Company": company,
	        "Tel": phone,
	        "Linkman": name,
	        "Email": email
	    });
	    json_str = JSON.stringify(func.JsonEscape(json_send));
	    //var json_str = func.JsonUnicode("{\"Company\":\"" + Company + "\",\"Tel\":\"" + Tel + "\",\"Linkman\":\"" + Linkman + "\",\"Email\":\"" + Email + "\"}";
	    
	    var json = JSON.parse(json_str);
	    func.DoREST(config.sendhost, config.sendport, "/yuanjiashx/email.ashx", "Post", json, function (data) {
	        res.send(data[0].result);
	    }, function (data) {
	        res.send(data[0].result);
	    });
    }


    
   
});

module.exports = router;
