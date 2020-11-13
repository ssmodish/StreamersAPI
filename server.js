require('dotenv').config()
const port = process.env.PORT || 3000

const express = require('express')

const morgan = require('morgan')

const apiRoutes = require('./api/apiRoutes')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

// All routes exist beyond '/api'
server.use('/api', apiRoutes)

// Response if endpoint not found
server.use(function (req, res) {
  res.status(404).send('<h1>Not Found</h1>')
})

// server.use('/', (req, res) => res.send('API up and running!'))
server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
