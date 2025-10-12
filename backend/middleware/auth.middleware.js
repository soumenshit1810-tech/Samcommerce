let jwt =require('jsonwebtoken')
let User=require ("../models/user.model")


module.exports.auth=(req,res,next)=>{
    try {
        let headers=res.headers;
        console.log(headers);
    } catch (error) {
        
    }
}