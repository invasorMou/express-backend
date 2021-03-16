const express = require('express')
const app = express()
const port = 3000

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

app.use('/', home)
app.use('/posts', posts)

app.listen(port, host, backlog, () => {
  console.log(`Backend app listening at http://localhost:${ port }`)
})
