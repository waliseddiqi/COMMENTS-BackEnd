const router  = require("express").Router();
const User = require("../dataModels/user_model");


const by = require("../services/encryption");



router.route("/").post(async(req,res)=>{
  //  console.log(req);
  
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    var encryptedPassword = await by.encrpt(password);
      
    const userobj = {
        "username":username,
        "email":email,
        "password":encryptedPassword
    }
   const newuser = new User(userobj);
    newuser.save().then((value)=>{
      if(value){
          res.status(200).send(value);
      }
    }).catch((err)=>{
       res.status(400).send(err);
    })
});


module.exports=router;