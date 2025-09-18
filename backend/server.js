const express =require('express')

let app=express()

const userRouter=require('../../BackEnd/routes/user.router')
app.use("/user",userRouter)



let port=process.env.PORT 
app.listen(port,()=>{
    console.log(`server Running on http://localhost:${port}`);
})
