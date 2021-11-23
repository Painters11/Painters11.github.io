import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { HexColorPicker } from 'react-colorful'

import Draw from '../Draw/index'
import './canvas.scss'

const Canvas = (props) => {
  const [tool, setTool] = useState('')
  const [color, setColor] = useState('black')
  const [brushSize, setBrushSize] = useState(5)

  const handleClick = (event) => {
    setTool(event.target.name)
  }

  const updateSlider = (event) => {
    setBrushSize(event.target.value)
  }


  return (
    <>
    <div class="container">
      <div class="ToolBar">
          <button onClick={handleClick} name="pen" className="tool">Pen</button>
          <button onClick={handleClick} name="rectangle" className="tool">Rectangle</button>
          <button onClick={handleClick} name="circle" className="tool">Circle</button>
          <button onClick={handleClick} name="eraser" className="tool">Eraser</button>    
          <label htmlFor="stroke">Brush Size (0 to 10)</label>
          <input type="range" min="1" max="20" defaultValue={brushSize} className="slider" id="stroke" onChange={updateSlider}></input>
          <HexColorPicker color={color} onChange={setColor} />
      </div>
      <div class="Canvas">
      <Draw toolSelected={tool} colorSelected={color} brushSizeSelected={brushSize}/>
      </div>
    </div> 
    </>
  )
}

export default Canvas
