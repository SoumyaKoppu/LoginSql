var mysql = require('mysql');
var express = require("express");

      var connection = mysql.createConnection({
        host: 'aws-albenus.ck3qlagv4gpd.us-east-2.rds.amazonaws.com',
        user: 'root',
        password: 'Smile001',
        database: 'sandb'
      });

     var app = express();

     app.post('/UserSignup', function(req, res) {
      var post = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        mobilenum:req.body.mobilenum,
        password: req.body.password
      };

      connection.query('INSERT INTO users VALUES ?', post, function(err, result) {
        
        res.json({msg:'success'});
      });

    });

    app.post('/UserLogin', function(req, res) {
        var post = {
          username: req.body.username,
         
          password: req.body.password
        };
  
        connection.query('select * from UserReg where name = ? and password = ?', post, function(err, result) {
         
          res.json({msg:'success'});
        });
  
      });
  














// var express = require("express");
// const mysql = require("mysql");
// const { default: UserSignup } = require("./src/components/userAuthentication/UserSignup");

//  var app = express();
 
//  var dbcon = require("../config/db_connection");
// const { Router } = require("express");

//  var connection = dbcon.getConnection();
 
//  connection.connect();
 

 
//  var router = express.Router();
 
//  router.post('/UserSignup', (req,res)=>{
//      const Name = req.body.name;
//      const Email = req.body.email;
//      const Password = req.body.password;
//      const Confirm_password = req.body.confirm_password;
 
//   db.query("insert into UserReg(first_name,last_name,email,mobilenum,password,)values(?,?,?,?,?)",
//       [first_name,last_name,email,mobilenum,password])
//     //   (err,result)=>{
//     //       console.log(err);
//     //   });
//   })
 
//   app.post('/UserLogin',(req,res)=> {
//      const Name = req.body.username;
//      const Password = req.body.password;
 
//      db.query("select * from UserReg where name = ? and password = ?",
//      [username,password],
//     //  (err,result) => {
//     //      if(err) {
//     //      console.log(err);
//     //      }
 
//     //      if(result.length > 0) {
//     //          res.send(result);
//     //          }else{
//     //          res.send({ message: "Incorrect UserName or password"});
//     //      }
//     //  }
//      );
//    });


//  app.listen(8080);
//  console.log("server up and running on port 8080");

// module.exports = router;













