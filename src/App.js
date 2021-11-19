import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/page/home/home.jsx'
import Canvas from './Components/page/canvas/Canvas.js'
import ToolSwitcher from './Components/Tools/ToolSwitcher.js'
import './App.css'

function App(props) {
  return (
    <Router>
    {/* <Line /> */}
    {/* <Rectangle /> */}
    {/* <Circle /> */}
    <ToolSwitcher />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/canvas' element={<Canvas />} />
      </Routes>
    </Router>
    )
  }

export default App;
