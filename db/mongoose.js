const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://localhost:27017/test-task`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose
