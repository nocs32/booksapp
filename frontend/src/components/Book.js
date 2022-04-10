import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Paper, Typography, Button } from '@mui/material'
import axios from 'axios'

const Book = (props) => {
  const { _id, title, description, img } = props.book
  const history = useNavigate()

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/library/${_id}`)
      .then((res) => res.data)
      .then(() => window.location.reload())
      .then(() => history('/library'))
  }

  return (
    <Paper elevation={2}>
      <img src={img} alt='' className='book-cover' />
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='p'>{description}</Typography>
      <div className='book-buttons'>
        <Button LinkComponent={Link} to={`/library/${_id}`}>
          Update
        </Button>
        <Button onClick={deleteHandler}>Delete</Button>
      </div>
    </Paper>
  )
}

export default Book
