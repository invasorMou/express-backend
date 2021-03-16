let express = require('express')
let router = express.Router()

router.get('/', function(req, res) {
  res.send('Welcome to my blog')
})

router.get('/about_us', function(req, res) {
  res.send('This is a blog application')
})

module.exports = router
