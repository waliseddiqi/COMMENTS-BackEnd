const bycrpt = require("bcrypt");




const encrpt  = (password,callback)=>{
    ////1 is cost factor should be 1-5 for now
 bycrpt.hash(password,1).then((value)=>{
     callback(value);
 })
}


const check = (password,hash,callback)=>{
    bycrpt.compare(password,hash).then((value)=>{
        callback(value);
    }).catch((err)=>{
        callback(err);
    })
}


module.exports={encrpt,check};
