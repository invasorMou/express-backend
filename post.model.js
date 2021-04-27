const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
      type: String,
      minlength: 3,
    },
    content: {
      type: String,
      minlength: 5,
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post


