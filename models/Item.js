const { model, Schema } = require('mongoose')

module.exports = model('Item', new Schema({
  text: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
}))
