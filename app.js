const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routs/task')
require('dotenv').config({ path: './.env' })
const notFound = require('./middleware/notFound')

// MIDDLEWARE
app.use(express.static('./public'))
app.use(express.json())

// ROUTS
app.use('/api/v1/tasks', tasks)

app.use('*', notFound)

// SERVER
const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MOMGO_URI)
    app.listen(port, () => console.log(` server listening on port ${port}!`))
  } catch (error) {
    console.log(error)
  }
}

start()
