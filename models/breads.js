const mongoose = require('mongoose')
const { Schema } = mongoose


const breadSchema = new Schema({
  name: { type: String,required: true },
  hasGluten: { type: Boolean },
  image: { type: String }
})


const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
  