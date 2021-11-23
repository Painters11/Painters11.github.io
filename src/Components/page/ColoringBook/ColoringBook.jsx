import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import Llama from './Llama'
import Heart from './Heart'



const ColoringBook = (props) => {
  const [color, setColor] = useState('black')
  const [drawing, setDrawing] = useState('llama')

  const handleChange = (event) => {
    setDrawing(event.target.value)
    
  }

  return (
    <>
    <select name="drawingList" value={drawing} onChange={handleChange}>
      <option value="option1">Select a Drawing</option>
      <option value="llama" >Llama</option>
      <option value="heart">Heart</option>
    </select>
    <HexColorPicker color={color} onChange={setColor} />
    {drawing === 'llama' ?  <Llama color={color}></Llama>: 'Select a coloring book page'}
    {drawing === 'heart' ? <Heart color={color}></Heart> : 'Select a coloring book page'}
    </>
  )
}

export default ColoringBook
