import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Allnotes from './pages/Allnotes'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/allnotes' element={<Allnotes />}  />
    </Routes>
  )
}

export default App
