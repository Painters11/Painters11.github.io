import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/shared/Layout'
import Land from './Components/page/Land'
import Canvas from './Components/page/sketch/Canvas/index.jsx'
import Team from './Components/page/Team/index.jsx'
import './App.css'

function App(props) {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Land />} />
          <Route path='/canvas' element={<Canvas />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </Layout>
    )
  }

export default App

