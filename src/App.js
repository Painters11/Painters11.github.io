import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/page/home/home.jsx'
import Canvas from './components/page/canvas/Canvas.js'
import './App.css'

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/canvas' element={<Canvas />} />
      </Routes>
    </Router>
  )
}

<<<<<<< HEAD
export default App
=======
      <Fragment>
        <Header />
        {/* <Line /> */}
        {/* <Rectangle /> */}
        {/* <Circle /> */}
        <ToolSwitcher />
      </Fragment>
    

    )
  }

export default App;
>>>>>>> just-canvas
