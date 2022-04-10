import React from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <AppBar position='static' sx={{ backgroundColor: '#D35400' }}>
        <Toolbar>
          <MenuBookIcon />
          <Typography pl={2} pr={3}>
            BooksApp
          </Typography>
          <Tabs textColor='#ffffff'>
            <Tab LinkComponent={NavLink} to='/' label='Home' />
            <Tab LinkComponent={NavLink} to='/library' label='Library' />
            <Tab LinkComponent={NavLink} to='/add' label='Add Book' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
