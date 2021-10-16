const router  = require("express").Router();
const User = require("../dataModels/user_model");


const by = require("../services/encryption");



const getByUserName = async(userName)=>{
    try {
        
      return await User.find({"username":userName});
    } catch (error) {
        throw "User not Found";
    }
}


const getByEmail = async(email)=>{
    try {
        
      return await User.find({"email":email});
    } catch (error) {
        throw "User not Found";
    }
}






router.route("/").get(async(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    let userObj;
    if(username!=null){
        userObj =await getByUserName(username);
    }else{
        userObj =await getByEmail(email);
    }
    
    try {
        let Hashpassword = userObj[0]['password'];
        let status  = await by.check(password,Hashpassword);
        if(status){
        res.status(200).send(userObj);

        }else{
        res.status(400).send(false);

        }

    } catch (error) {
        res.status(400).send(false);
        
    }

});




module.exports=router;