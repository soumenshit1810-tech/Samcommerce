const express=require('express')
const { createOrder, viewOrder } = require('../controller/order.controller.js')
const router=express.Router()


router.post("/create",createOrder)
router.get("/view",viewOrder)

module.exports =router