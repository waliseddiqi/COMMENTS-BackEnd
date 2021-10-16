const bycrpt = require("bcrypt");




const encrpt  = async (password)=>{
    ////1 is cost factor should be 1-5 for now
    try {
        
        return await bycrpt.hash(password,1)

    } catch (error) {
        return false;
    };
}


const check = async(password,hash)=>{
    try {
        return await bycrpt.compare(password,hash)
        
    } catch (error) {
        return;
    }
        
}


module.exports={encrpt,check};
