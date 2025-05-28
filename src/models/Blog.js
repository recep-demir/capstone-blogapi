"use strict"

const { mongoose } = require('../configs/dbConnection')

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    trim: true,
    default: ""
  }
}, {
  collection: 'blogs',
  timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)