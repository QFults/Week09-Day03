// const { Schema, model, connect } = require('mongoose')
// connect('mongodb://localhost/tododb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
//   .then(() => {
// console.log('Connected!')

// const ItemSchema = new Schema({
//   text: {
//     type: String,
//     required: true
//   },
//   isDone: {
//     type: Boolean,
//     default: false
//   }
// })

// const Item = model('Item', ItemSchema)

// Item.create({
//   text: 'Take out trash',
//   isDone: false
// })
//   .then(item => {
//     console.log(item)
//   })
//   .catch(err => console.log(err))

// Item.findById('60660543b37a5b6980b1d12c')
//   .then(item => {
//     console.log(item)
//   })
//   .catch(err => console.log(err))
// Item.findByIdAndUpdate('60660543b37a5b6980b1d12c', { isDone: true })
//   .then(() => {
//     console.log('updated!')
//   })
//   .catch(err => console.log(err))
// Item.find()
//   .then(items => {
//     console.log(items)
//   })
//   .catch(err => console.log(err))
// Item.findByIdAndDelete('60660543b37a5b6980b1d12c')
//   .then(() => {
//     console.log('deleted!')
//   })
//   .catch(err => console.log(err))
// })
// .catch(err => console.log(err))
