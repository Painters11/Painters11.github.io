import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/shared/Layout'
import Home from './Components/page/Home'
import Canvas from './Components/page/sketch/Canvas/index.jsx'
import './App.css'

function App(props) {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/canvas' element={<Canvas />} />
        </Routes>
      </Layout>
    </Router>


    )
  }

export default App
