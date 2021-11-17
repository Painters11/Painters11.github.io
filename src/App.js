<<<<<<< HEAD
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

=======
import React, { Fragment } from 'react'
import Header from './Components/Header/Header.js'
import Canvas from './Components/Canvas/Canvas.js'

const App = props => (
  <Fragment>
    <Layout />
  </Fragment>
)
>>>>>>> aa925a2 (Odd merge issue; resolving)
export default App;
