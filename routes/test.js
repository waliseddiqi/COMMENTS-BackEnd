const router = require("express").Router();

const User = require("../dataModels/user_model");
const by = require("../services/encryption");

router.route("/").get((req,res)=>{
    console.time("end");
by.encrpt("wali",(value)=>{
console.log(value);
})


    
// by.check("wali","$2b$04$dPxyXc/B.8593cu8WxzfcO9VlfDEkgFSJOmNvwNor/fi5OrldTpDC",(value)=>{
//     console.log(value);
// // })

// console.timeEnd("end")
res.send("value");

// User.find({}).then((value)=>{
// res.status(200).send(value);
// }).catch((err)=>{
// res.status(404).send(err);
// })

})



module.exports=router;