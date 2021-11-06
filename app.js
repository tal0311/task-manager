const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routs/task')

// MIDDLEWARE
app.use(express.json())

app.get('/hallo', (req, res) => res.send('Task manager app'))

app.use('/api/v1/tasks', tasks)

// SERVER
const port = 3000

const start = async () => {
  try {
    await connectDB()
    app.listen(port, () => console.log(` server listening on port ${port}!`))
  } catch (error) {
    console.log(error)
  }
}

start()
