import React, { useState } from 'react'
import { Typography, TextField, FormLabel, Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const history = useNavigate()
  const url = 'http://localhost:5000/library'
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    img: '',
  })
  const sendRequest = async () => {
    await axios
      .post(url, {
        title: String(inputs.title),
        description: String(inputs.description),
        img: String(inputs.img),
      })
      .then((res) => res.data)
  }
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequest().then(() => history('/library'))
  }

  return (
    <>
      <Typography variant='h3' pt={2} pb={2} textAlign='center'>
        Add a new book
      </Typography>
      <form className='add-book' onSubmit={handleSubmit}>
        <FormLabel>Title</FormLabel>
        <TextField
          onChange={handleChange}
          value={inputs.title}
          margin='normal'
          fullWidth
          name='title'
          variant='outlined'
        />
        <FormLabel>Desctiption</FormLabel>
        <TextField
          onChange={handleChange}
          value={inputs.description}
          margin='normal'
          fullWidth
          name='description'
          variant='outlined'
        />
        <FormLabel>Image URL</FormLabel>
        <TextField
          onChange={handleChange}
          value={inputs.img}
          margin='normal'
          fullWidth
          name='img'
          variant='outlined'
        />
        <div className='add-button'>
          <Button type='submit' color='primary' variant='contained'>
            Add Book
          </Button>
        </div>
      </form>
    </>
  )
}

export default AddBook
