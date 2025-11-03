const express=require('express')
const { addWeb, getWeb, deleteWeb, updateWeb } = require('../controller/web.controller.js')
const router=express.Router()


router.post("/add",addWeb)
router.get("/all",getWeb)
router.delete("/delete/:id",deleteWeb)
router.put("/update/:id",updateWeb)

module.exports =router