import React, { Profiler } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'

import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sams from './Pages/Sams'
import Myorders from './Pages/Myorders'
import Wishlist from './Pages/Wishlist'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import Profile from './Pages/auth/Profile'
import Publish from './Pages/Publish'



function App() {
  return (
    <div>
      <Navbar />
      <div className='pt-14'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/sams' element={<Sams />} />
          <Route path='/my-orders' element={<Myorders />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/publish' element={<Publish />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route Path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>


      <Footer />


    </div>
  )
}

export default App