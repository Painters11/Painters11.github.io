import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import Draw from './Draw'

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


// class Canvas extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       penSelected: false,
//       rectangleSelected: false,
//       circleSelected: false
      
//     }
//   }
//     componentDidUpdate(prevProps) {
//         const { toolSelected } = this.props
//         if(toolSelected !== prevProps.toolSelected) {
//             console.log(toolSelected)
//             if(toolSelected === 'Pen'){
//                 this.setState({ 
//                     penSelected: true,
//                     rectangleSelected: false,
//                     circleSelected: false
//                 })
//             } else if(toolSelected === 'Rectangle'){
//                 this.setState({ 
//                     penSelected: false,
//                     rectangleSelected: true,
//                     circleSelected: false
//                 })
//             } else if (toolSelected === 'Circle') {
//                 this.setState({ 
//                     penSelected: false,
//                     rectangleSelected: false,
//                     circleSelected: true
//                 })
//             }
//         }
        
//     }

   

//   render() {  
//     return (
//       <>
//         {this.state.penSelected ? <Pen isSelected={this.state.penSelected}/> : ''}
//         {this.state.rectangleSelected ? <Rectangle isSelected={this.state.rectangleSelected}/> : ''}
//         {this.state.circleSelected ? <Circle isSelected={this.state.circleSelected}/> : ''}
//       </>
//     )
//   }

// }

// export default Canvas