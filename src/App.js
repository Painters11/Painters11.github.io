import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/page/Home'
import ToolSwitcher from './Components/page/sketch/Tools/ToolSwitcher.jsx'
import './App.css'

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ToolSwitcher' element={<ToolSwitcher />} />
      </Routes>
    </Router>
    )
  }

export default App;
