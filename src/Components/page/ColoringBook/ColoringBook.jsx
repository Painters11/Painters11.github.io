import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import Llama from './Llama'


const ColoringBook = (props) => {
  const [color, setColor] = useState('black')



  return (
    <>
    <HexColorPicker color={color} onChange={setColor} />
    <Llama color={color}></Llama>
    </>
  )
}

export default ColoringBook
