import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, TextField, FormLabel, Button } from '@mui/material'
import axios from 'axios'

const Details = () => {
  const id = useParams().id
  const [inputs, setInputs] = useState({})
  const history = useNavigate()

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/library/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.theBook))
    }
    fetchHandler()
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequest().then(() => history('/library'))
  }
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const sendRequest = async (e) => {
    await axios
      .put(`http://localhost:5000/library/${id}`, {
        title: String(inputs.title),
        description: String(inputs.description),
        img: String(inputs.img),
      })
      .then((res) => res.data)
  }

  return (
    <>
      <Typography variant='h3' pt={2} pb={2} textAlign='center'>
        Update book details
      </Typography>
      {inputs && (
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
              Update book
            </Button>
          </div>
        </form>
      )}
    </>
  )
}

export default Details
