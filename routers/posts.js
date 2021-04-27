let express = require('express')
let router = express.Router()
let Post = require('../post.model')

//ACTIONS GET, POST, PUT, DELETE

//GET ALL THE POSTS
router.get('/', function(req, res) {
  Post.find({})
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
})

//GET ONE POST BY ID
router.get('/:id', function(req, res) {
  Post.findById(req.params.id)
    .then(post => res.json({ data: post }))
    .catch(err => res.json(err))
})

//CREATE A POST
router.post('/', function(req, res) {

 let { title, content } = req.body
 
 let newPost = new Post({ title, content })
 
 newPost.save()
  .then(() => res.json({ data: 'Post created successfully', status: 200 }))
  .catch(err => res.json(err))
})

//UPDATE AN EXISTING POST BY ID
router.put('/:id', function(req, res) {
  let { title, content } = req.body
  
  Post.findById(req.params.id).update({ title, content })
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
