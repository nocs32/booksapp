import mongoose from 'mongoose'

const Schema = mongoose.Schema
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
})

export default mongoose.model('book', bookSchema)
