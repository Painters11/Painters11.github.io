import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import Rect from './Llama'


const ColoringBook = (props) => {
  const [color, setColor] = useState('black')



  return (
    <>
    <HexColorPicker color={color} onChange={setColor} />
    <Rect color={color}></Rect>
    </>
  )
}

export default ColoringBook
