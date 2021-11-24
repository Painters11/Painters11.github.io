import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import Heart from './Heart'
import Pumpkin from './Pumpkin'
import Dog from './Dog'
<<<<<<< HEAD
import IceCream from './IceCream'
import Flower from './Flower'
import Moon from './Moon'
=======
>>>>>>> bug


const ColoringBook = (props) => {
  const [color, setColor] = useState('black')
  const [drawing, setDrawing] = useState('llama')

  const handleChange = (event) => {
    setDrawing(event.target.value)
    
  }

  return (
    <>
    <select name="drawingList" value={drawing} onChange={handleChange} className="drop">
      <option value="initial">Select a Drawing</option>
      <option value="heart">Heart</option>
      <option value="pumpkin">Pumpkin</option>
      <option value="dog">Dog</option>
<<<<<<< HEAD
      <option value="icecream">Ice Cream</option>
      <option value="flower">Flower</option>
      <option value="moon">Moon</option>
=======
>>>>>>> bug
    </select>
    <HexColorPicker color={color} onChange={setColor} />
    {drawing === 'initial' ? "Select a drawing and color!" : ''}
    {drawing === 'heart' ? <Heart color={color}></Heart> : ''}
    {drawing === 'pumpkin' ? <Pumpkin color={color}></Pumpkin> : ''}
    {drawing === 'dog' ? <Dog color={color}></Dog> : ''}
<<<<<<< HEAD
    {drawing === 'icecream' ? <IceCream color={color}></IceCream> : ''}
    {drawing === 'flower' ? <Flower color={color}></Flower> : ''}
    {drawing === 'moon' ? <Moon color={color}></Moon> : ''}
=======
>>>>>>> bug
    </>
  )
}

export default ColoringBook
