const mongoose = require('mongoose')
const { Schema, model } = mongoose


const webSchema = new Schema({
    title: {
        type: string,
        required: true,
        trim: true
    },
    description: {
        type: string,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    banner: {
        type: string,
        required: true
    },
    user: {
        type: mongoose.Type.ObjectId,
        ref: "Users",
        required: true
    },

}, { timestamps: true })
module.exports = model("Webs", webSchema)
