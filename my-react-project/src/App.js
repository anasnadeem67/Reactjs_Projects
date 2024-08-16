import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Addblog from './components/AddBlog'
import Blogs from './components/Blogs'
import Login from './components/Login'
import SingleBlog from './components/SingleBlog'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/:id' element={<SingleBlog />} />
      <Route path='/addblog' element={<Addblog />} />
      </Routes>
    </Router>
  )
}

export default App
