import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import Llama from './Llama'
import Heart from './Heart'
import Pumpkin from './Pumpkin'


const ColoringBook = (props) => {
  const [color, setColor] = useState('black')
  const [drawing, setDrawing] = useState('llama')

  const handleChange = (event) => {
    setDrawing(event.target.value)
    
  }

  return (
    <>
    <select name="drawingList" value={drawing} onChange={handleChange}>
      <option value="initial">Select a Drawing</option>
      <option value="llama" >Llama</option>
      <option value="heart">Heart</option>
    <option value="pumpkin">Pumpkin</option>
    </select>
    <HexColorPicker color={color} onChange={setColor} />
    {drawing === 'initial' ? "Select a drawing and color!" : ''}
    {drawing === 'llama' ?  <Llama color={color}></Llama>: ''}
    {drawing === 'heart' ? <Heart color={color}></Heart> : ''}
    {drawing === 'pumpkin' ? <Pumpkin color={color}></Pumpkin> : ''}
    </>
  )
}

export default ColoringBook
