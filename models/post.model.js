const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
    },
		author: {
			type: String,
			required: true,
			minlength: 3,
		},
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
