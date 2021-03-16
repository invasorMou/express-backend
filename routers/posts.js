let express = require('express')
let router = express.Router()

router.get('/', function(req, res) {
  res.send('This are all the posts')
})

router.get('/:id', function(req, res) {
  res.send(`This are all the posts ${ req.params.id }`)
})

router.post('/', function(req, res) {
  res.send('Post created')
})

router.put('/:id', function(req, res) {
  res.send('Post updated')
})

router.delete('/:id', function(req, res) {
  res.send('Post deleted')
})

module.exports = router
