import './App.css'
import React, { useState } from 'react'
import Home from './Home'
import About from './pages/About'
import Services from './pages/Services'
import Experience from './pages/Experience'
import Work from './pages/Work'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>

  )
}

export default App
