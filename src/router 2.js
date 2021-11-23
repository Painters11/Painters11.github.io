import React from 'react'
import Home from './components/page/home/home.jsx'
import Canvas from './components/page/canvas/Canvas.js'

const routes = {
  "/": () => <Home />,
  "/canvas": () => <Canvas />
}

export default routes