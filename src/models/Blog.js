"use strict"

const { mongoose } = require('../configs/dbConnection')

const BlogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  image: {
    type: String,
    trim: true
  },
  isPublish: {
    type: Boolean,
    default: false
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  countOfVisitors: {
    type: Number,
    default: 0
  }
}, {
  collection: 'blogs',
  timestamps: true
})

module.exports = mongoose.model('blog', BlogSchema)
