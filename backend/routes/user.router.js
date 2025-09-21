const express=require('express')
const {userLogin, userRegister,userProfile}=require('../controller/user.controller')
const router=express.Router()


router.post("/login",userLogin)
router.post("/register",userRegister)
router.get("/profile",userProfile)
// router.get("/my-wishlist",userRegister)
// router.get("/my-orders",userRegister)

module.exports =router