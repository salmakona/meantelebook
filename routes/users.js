var express = require('express');
var router = express.Router();
var session = require('express-session');


/*router.get('/users', function(req,res,next){
 res.send('USE PAGE');
});*/

var mongojs = require('mongojs');

//To connect using the mongo shell:
//mongo ds133281.mlab.com:33281/telebook -u <dbuser> -p <dbpassword>

//To connect using a driver via the standard MongoDB URI
var db = mongojs('mongodb://telebook:telebook@ds133281.mlab.com:33281/telebook', ['users']);

// Get All Users
router.get('/users', function(req, res, next){

    db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
    
});


// Get Single Task
router.get('/user/:id', function(req, res, next){

    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, user){
        if(err){
            res.send(err);
            console.log("Erorr");
        }
        res.json(user);
    });

});

//Save Task
router.post('/user',function(req,res,next){

    var user =req.body;
    if(!user.name || !(user.email_address+'')){
        res.status(400);
        res.json({
            "error":"Bad data"
        });
    }else{
        db.users.save(user,function(err,user){
            if(err){
                res.send(err);
            }else{
                res.json(user);
            }
        })
    }

});

// Delete User
router.delete('/user/:id', function(req, res, next){

    db.users.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });

});


// Update User
router.put('/user/:id', function(req, res, next){

    var user = req.body;
    var updateUser = {};
    
    if(user.name){

        updateUser.name = user.name;
    }

    if(user.user_name){

        updateUser.user_name = user.user_name;
    }
    
    if(user.email_address){

        updateUser.email_address = user.email_address;
    }

    if(user.password){

        updateUser.password = user.password;
    }

    if(user.number){

        updateUser.number = user.number;
    }
    
    if(!updateUser){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });

    } else {
        db.users.update({_id: mongojs.ObjectId(req.params.id)},updateUser, {}, function(err, user){
            
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }
});

//login

// router.get('/login',function(req,res){
//     session = req.session;
//     if(req.body.user_name)

// });

router.post('/login',function(req,res,next){
    var user =req.body;
    if(!user.user_name+'' || (!user.password+'')){
         res.status(400);
          res.json({
            "error":"bad Data"
        });
    }
    //session = req.session;
    
    // if(user.user_name =='admin' && user.password =='12345'){
    //     session.id = req.body.user_name;
    //  }
    // res.redirect('/redirects');
    
});

router.get('/redirects',function(req,res){
    if(session.id){
        res.redirect('/admin');
    }else{
        res.send("who are you?");
    }
});



module.exports = router;