"use strict"

const {mongoose}= require("../configs/dbConnection")

const CommentSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },

    blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
    },
    comment:{
        type:String,
        required: true,

    }


},{collection: 'comments',
    timestamps: true})

    module.exports = mongoose.model("Comment",CommentSchema)