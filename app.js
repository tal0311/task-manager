const express = require('express')
const app = express()
const tasks = require('./routs/task')

// MIDDLEWARE
app.use(express.json())

app.get('/hallo', (req, res) => res.send('Task manager app'))

app.use('/api/v1/tasks', tasks)

// SERVER
const port = 3000
app.listen(port, () => console.log(` server listening on port ${port}!`))
