import book from '../models/book.js'

export const getAllBooks = async (req, res) => {
  let books
  try {
    books = await book.find()
  } catch (error) {
    console.log(error)
  }
  if (!books) {
    return res.status(404).json({ message: 'No books found.' })
  }
  return res.status(200).json({ books })
}

export const getById = async (req, res) => {
  let theBook
  let id = req.params.id
  try {
    theBook = await book.findById(id)
  } catch (error) {
    console.log(error)
  }
  if (!theBook) {
    return res.status(404).json({ message: 'No book found.' })
  }
  return res.status(200).json({ theBook })
}

export const addBook = async (req, res) => {
  let newBook
  const { title, description, img } = req.body
  try {
    newBook = new book({ title, description, img })
    await newBook.save()
  } catch (error) {
    console.log(error)
  }
  if (!newBook) {
    return res.status(500).json({ message: 'Unable to save a new book.' })
  }
  return res.status(201).json({ newBook })
}

export const updateBook = async (req, res) => {
  let updatedBook
  const id = req.params.id
  const { title, description, img } = req.body
  try {
    updatedBook = await book.findByIdAndUpdate(id, { title, description, img })
    updatedBook = await updatedBook.save()
  } catch (error) {
    console.log(error)
  }
  if (!updatedBook) {
    return res.status(404).json({ message: 'Unable to update a book.' })
  }
  return res.status(200).json({ updatedBook })
}

export const deleteBook = async (req, res) => {
  let deletedBook
  const id = req.params.id
  try {
    deletedBook = await book.findByIdAndRemove(id)
  } catch (error) {
    console.log(error)
  }
  if (!deletedBook) {
    return res.status(404).json({ message: 'Unable to delete a book.' })
  }
  return res.status(200).json({ message: 'Book is deleted.' })
}
