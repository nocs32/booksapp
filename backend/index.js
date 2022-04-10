import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/book.js'

const PORT = 5000
const db =
  'mongodb+srv://root:12345Aa$$@booksapp.ozaxb.mongodb.net/BooksApp?retryWrites=true&w=majority'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/library', router)

mongoose
  .connect(db)
  .then(() => console.log('Conetcted to the Database.'))
  .then(
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
  )
  .catch((error) => console.log(error))
