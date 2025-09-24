const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Orders"
    }],
    webs: [{
        type: Schema.Types.ObjectId,
        ref: "Webs"
    }],
    wishlists: [{
        type: Schema.Types.ObjectId,
        ref: "Wishlists"
    }]
}, { timestamps: true });

module.exports = model("User", userSchema);
