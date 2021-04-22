let express = require('express')
let router = express.Router()
let Post = require('../models/post.model')

//ACTIONS GET, POST, PUT, DELETE

//GET ALL THE POSTS
router.get('/', function(req, res) {
  Post.find()
  .then(posts => res.json(posts))
  .catch(err => res.json(err))
})

//GET ONE POST BY ID
router.get('/:id', function(req, res) {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.json(err))
})

//CREATE A POST
router.post('/', function(req, res) {
  const { title, content, author } = req.body

  const newPost = new Post({ title, content, author })
  
  newPost.save()
    .then(() => res.send('Post created'))
    .catch(err => res.json(err))
})

//UPDATE AN EXISTING POST BY ID
router.put('/:id', function(req, res) {
  const { title, content, author } = req.body
  
  Post.findById(req.params.id).update({ title, content, author })
    .then(post => res.json(post))
    .catch(err => res.json(err))
})

//DELETE AN EXISTING POST BY ID
router.delete('/:id', function(req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.send('Post deleted'))
    .catch(err => res.json(err))
})

module.exports = router
