import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/shared/Layout'
import Land from './Components/page/Land'
import Canvas from './Components/page/sketch/Canvas/index.jsx'
import ColoringBook from './Components/page/ColoringBook/ColoringBook'
import './App.css'

function App(props) {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Land />} />
          <Route path='/canvas' element={<Canvas />} />
          <Route path='/coloringbook' element={<ColoringBook />} />
        </Routes>
      </Layout>
    )
  }

export default App

