import React, { useEffect, useState } from 'react'
import rough from 'roughjs/bundled/rough.esm'
import Layout from '../../../shared/Layout'
import ToolSwitcher from '../Tools/ToolSwitcher.js'

const generator = rough.generator()
const drawLine = (x1, y1, x2, y2) => {
  const line = generator.line(x1, y1, x2, y2)
  return { x1, x2, y1, y2, line }
}
// start to build out rectangles
// const drawRect = (x1, y1, x2, y2) => {
//     const line = generator.rectangle(x1, y1, x2-x1, y2-y1)
//     return { x1, x2, y1, y2, line }
// }

const Canvas = () => {
  const [drawings, setDrawings] = useState([])
  const [draw, setDraw] = useState(false)
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const roughCanvas = rough.canvas(canvas)

    drawings.forEach(({ line }) => roughCanvas.draw(line))
  }, [drawings])

  const handleMouseDown = (event) =>{
    setDraw(true)
    const { clientX, clientY } = event
    
    const drawing = drawLine(clientX, clientY, clientX, clientY)
    setDrawings(prevState => [...prevState, drawing])
  }
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    if(draw) {
      const finalDrawing  = drawings.length - 1
      const { x1, y1 } = drawings[finalDrawing]
      const drawing = drawLine(x1, y1, clientX, clientY)

      const drawingsCopy = [...drawings]
      drawingsCopy[finalDrawing] = drawing
      setDrawings(drawingsCopy)
    }
  }

  const handleMouseUp = (event) => {
    setDraw(false)
    console.log(draw)
  }

  return (
    <Layout>
      {/* <Line /> */}
      {/* <Rectangle /> */}
      {/* <Circle /> */}
      <ToolSwitcher />
      <canvas id="canvas"
        width={window.innerWidth} 
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}        onMouseUp={handleMouseUp}
      >
        Paint
      </canvas>
    </Layout>
  )
}

export default Canvas