const mongoose = require('mongoose')
const { schema } = require('./userModel')

 const cartSchema  = mongoose.Schema({
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
  },

 })
 module.exports= mongoose.model('carts',cartSchema)