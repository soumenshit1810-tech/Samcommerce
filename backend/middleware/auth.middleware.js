let jwt =require('jsonwebtoken')
let User=require ("../models/user.model.js")


module.exports.auth=async (req,res,next)=>{
    try {
        // let token=req.headers?.authorization;
        let token = req.headers?.authorization?.split(" ")[1];
        console.log((token))
        if (!token){
            return res.status(401).json({ message: "Unauthorized Access", success: false })
        }else{
            
            let decoded=jwt.verify(token,process.env.JWT_SECRET)
            console.log(decoded)
            // if(decoded){
            //     let _id=decoded._id;
            //     let user=await User.findById(_id)
            //     req .user=user
            //     next();
            //     console.log(decoded)
            // }else{
            //     return res.status(401).json({ message: "Unauthorized Access", success: false })
            // }
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal Servar Problem", success: false })
    }

}