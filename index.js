const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

require('dotenv').config()

//ROUTERS
let home = require('./routers/home')
let posts = require('./routers/posts')

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const logger = (req, res, next) => {
  console.log(`Started ${ req.method } ${ req.url }`)
  console.log(`Parameters: ${ JSON.stringify(req.body) }`)
  next()
}

app.use(logger)

// MONGO
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

//ROUTERS
app.use('/', home)
app.use('/posts', posts)

//Can you guess what is this doing?
app.get('*', function(req, res){
  res.send('what???', 404);
});


//SERVER
app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${ port }`)
})
