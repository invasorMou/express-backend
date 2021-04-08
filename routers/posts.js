let express = require('express')
let router = express.Router()

// fake data base
let posts = {
  1: {
    title: 'express.js',
    content: 'express.js is cool',
    author: 'some dude',
    date: 'yesterday',
  },
  2: {
    title: 'how to use express.js',
    content: 'npm install express',
    author: 'some dude',
    date: 'today',
  }
}

let n = 2


//ACTIONS GET, POST, PUT, DELETE

//GET ALL THE POSTS
router.get('/', function(req, res) {
  res.send(posts)
})

//GET ONE POST BY ID
router.get('/:id', function(req, res) {
  console.log('Look for post with id: ' + req.params.id)
  let msg
  if (posts[req.params.id]) {
    msg = posts[req.params.id]
  } else {
    msg = 'no post with id: ' + req.params.id
  }
  res.send(msg)
})

//CREATE A POST
router.post('/', function(req, res) {
  n += 1
  posts[n] = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: req.body.date,
  }
  console.log(posts)
  res.send('Post created successfully')
})

//UPDATE AN EXISTING POST BY ID
router.put('/:id', function(req, res) {
  posts[req.params.id] = posts[req.params.id] + ' !!!'
  console.log(posts)
  res.send(posts[req.params.id])
})
//DELETE AN EXISTING POST BY ID
router.delete('/:id', function(req, res) {
  delete posts[req.params.id]
  console.log(posts)
  res.send('Post deleted')
})

module.exports = router
