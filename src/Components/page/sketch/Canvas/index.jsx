import React, { useState } from 'react'
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
    <button onClick={handleClick} name="pen" type="radio">Pen</button>
    <button onClick={handleClick} name="rectangle" type="radio">Rectangle</button>
    <button onClick={handleClick} name="circle" type="radio">Circle</button>
    <label htmlFor="stroke">Brush Size (0 to 10)</label>
    <input type="range" min="1" max="20" defaultValue={brushSize} className="slider" id="stroke" onChange={updateSlider}></input>
    <HexColorPicker color={color} onChange={setColor} />
    <Draw toolSelected={tool} colorSelected={color} brushSizeSelected={brushSize}/>
    </>
  )
}

export default Canvas
