import React, { useState, useRef } from 'react'

import Draw from '../Draw/index'
import './canvas.scss'

const Canvas = (props) => {
  const [tool, setTool] = useState('')
  const [color, setColor] = useState('black')
  const [brushSize, setBrushSize] = useState(5)
  const prevTool = useRef('')


  const handleClick = (event) => {
    setTool(event.target.name)
    if(tool !== 'color') {
      prevTool.current = tool
    }
  }

  const updateSlider = (event) => {
    setBrushSize(event.target.value)
  }

  const handleMouseUp = () => {
    setTool(prevTool.current)
  }
  const handleChange = (event) => {
    setColor(event.target.value)

  }

  return (
    <>
    <div className="container" >
        <Draw toolSelected={tool} colorSelected={color} brushSizeSelected={brushSize} />
      <div className="toolbar">
          <button onClick={handleClick} name="pen" className="tool">Pen</button>
          <button onClick={handleClick} name="rectangle" className="tool">Rectangle</button>
          <button onClick={handleClick} name="circle" className="tool">Circle</button>
          <button onClick={handleClick} name="eraser" className="tool">Eraser</button>
          <button onClick={handleClick} name="color" className="tool">Color</button>
          <button onClick={handleClick} name="brushSize" className="tool">Brush Size</button>
          {tool === 'brushSize' ? <input type="range" min="1" max="20" defaultValue={brushSize} className="slider" id="stroke" onChange={updateSlider} 
               onMouseUp={handleMouseUp}>
              </input>
               : ''}

          {tool === 'color' ? 
            <div className="colorContainer">
              <div className="colorItem">
                <div className="colorSquare">
                    <input type="color" className="colorInput" value={color} onChange={handleChange}/>
                </div>

              </div>
            </div>
           : ''}
         </div>
    </div> 
    </>
  )
}

export default Canvas
