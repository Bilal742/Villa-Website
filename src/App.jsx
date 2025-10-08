import React from 'react'
import "./App.css"
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Properties from './Pages/Properties'
import PropertyDetails from './Pages/PropertyDetails'
import Contact from './Pages/Contact'
import Schedule from './Pages/Schedule'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/PropertyDetails" element={<PropertyDetails />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Schedule" element={<Schedule/>} />

        </Routes>
    </div>
  )
}

export default App