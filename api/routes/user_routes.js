var models 		 = require('../models');
var express 	 = require('express');
var randomString = require('random-string');
var jwt 		 = require('jsonwebtoken');
var router 		 = express.Router();


router.post('/login',function(req,res){
	var where = {where:{email:req.body.email,password:req.body.password}};
	models.Users.find(where).then(function(user){
		var user_obj = {email:user.email,id:user.id};
		var token = jwt.sign(user_obj,'Fv1f3Y37S3RorBbT4PumpWVHejaEYnGs');
			res.set('authentication',token);
	        res.json({
	        	user:user
	        });
	});
});


module.exports = router;