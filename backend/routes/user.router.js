const express=require('express')
const {userLogin, userRegister}=require('../controller/user.controller')
const router=express.Router()


router.get("/login",userLogin)
router.get("/register",userRegister)
router.get("/profile",userRegister)
router.get("/my-wishlist",userRegister)
router.get("/my-orders",userRegister)

module.exports =router