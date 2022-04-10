import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import Library from './pages/Library'
import Details from './pages/Details'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<AddBook />} exact />
          <Route path='/library' element={<Library />} exact />
          <Route path='/library/:id' element={<Details />} exact />
        </Routes>
      </main>
    </>
  )
}

export default App
