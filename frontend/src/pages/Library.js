import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import axios from 'axios'
import Book from '../components/Book'

const Library = () => {
  const [books, setBooks] = useState()
  const url = 'http://localhost:5000/library'
  const fetchHandler = async () => {
    return await axios.get(url).then((res) => res.data)
  }
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books))
  }, [])

  return (
    <>
      <Typography variant='h3' pt={2} pb={2} textAlign='center'>
        All books
      </Typography>
      <div className='books'>
        {books &&
          books.map((book, i) => (
            <div className='book' key={i}>
              <Book book={book} />
            </div>
          ))}
      </div>
    </>
  )
}

export default Library
