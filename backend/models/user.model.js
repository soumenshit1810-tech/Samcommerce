const mongoose=require('mongoose')
const {Schema,model} =mongoose


const userSchema=new Schema({
    name:{
        type:string,
        required:true,
        trim:true
    },
    email:{
        type:string,
        required:true,
        trim:true,
        unique:true

    },
    password:{
        type:string,
        required:true,
        trim:true,
    },
    orders:[{
        type:mongoose.Type.ObjectId,
        ref:"Orders"

    }],
    webs:[{
        type:mongoose.Type.ObjectId,
        ref:"Webs"

    }],
    wishlists:[{
        type:mongoose.Type.ObjectId,
        ref:"Wishlists"

    }]
})
module.exports=model("user",userSchema)
