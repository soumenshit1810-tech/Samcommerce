const mongoose = require('mongoose')
const { Schema, model } = mongoose


const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    web: {
        type: Schema.Types.ObjectId,
        ref: "Webs",
        required: true
    },

}, { timestamps: true })
module.exports = model("Orders", orderSchema)
