import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Components/page/Home'
// import ToolSwitcher from './Components/page/sketch/Tools/ToolSwitcher.jsx'
import Canvas from './Components/page/sketch/Canvas/index.jsx'
import './App.css'

function App(props) {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/ToolSwitcher' element={<ToolSwitcher />} />
        
    //   </Routes>
    // </Router>
    <Canvas />

    )
  }

export default App
