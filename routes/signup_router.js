const router  = require("express").Router();
const User = require("../dataModels/user_model");



router.route("/").post((req,res)=>{
  //  console.log(req);
  
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const userobj = {
        "username":username,
        "email":email,
        "password":password
    }
   console.log(userobj);
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