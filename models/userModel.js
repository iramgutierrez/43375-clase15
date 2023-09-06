const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
  name:String,
  email:{
    type:String,
    unique:true,
    
  },
  password:String
})
module.exports  = mongoose.model('users',userShema)