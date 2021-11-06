const mongoose = require('mongoose')

const connectionString =
  'mongodb+srv://talAmit:711AIALT@tasks.wm4et.mongodb.net/tasks?retryWrites=true&w=majority'

const connectDB = (uri) => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
