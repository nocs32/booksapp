import React from 'react'
import { Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import bg from '../images/bg.jpg'

const Home = () => {
  return (
    <>
      <Typography variant='h3' pt={2} pb={2} textAlign='center'>
        Home
      </Typography>
      <img src={bg} alt='' className='home-bg' />
      <div className='home-button'>
        <Button LinkComponent={Link} to='/library' color='primary'>
          Browse books
        </Button>
      </div>
    </>
  )
}

export default Home
