const mongoose = require('mongoose')
const { Schema, model } = mongoose


const wishlistSchema = new Schema({
    user: {
        type: mongoose.Type.ObjectId,
        ref: "Users",
        required: true
    },
    web: {
        type: mongoose.Type.ObjectId,
        ref: "Webs",
        required: true
    },

}, { timestamps: true })
module.exports = model("Wishlists", wishlistSchema)
