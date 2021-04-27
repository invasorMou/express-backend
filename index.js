const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const mongoose = require('mongoose')

//ROUTERS
let home = require('./routers/home')
let posts = require('./routers/posts')

//MIDDLEWARES
//Cors settings
let corsOptions = {
  origin: process.env.FRONTENDURL,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const logger = (req, res, next) => {
  console.log(`Started ${ req.method } ${ req.url }`)
  console.log(`Parameters: ${ JSON.stringify(req.body) }`)
  next()
}

app.use(logger)

const dbUrl = process.env.MONGODB
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB connected')
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
