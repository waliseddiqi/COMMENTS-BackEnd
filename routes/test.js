const router = require("express").Router();

const User = require("../dataModels/user_model");


router.route("/").get((req,res)=>{


User.find({}).then((value)=>{
res.status(200).send(value);
}).catch((err)=>{
res.status(404).send(err);
})

})



module.exports=router;