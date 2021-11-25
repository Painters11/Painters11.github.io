import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit'
import draw1 from '../../../imgs/DrawingPad3.png'
import draw2 from '../../../imgs/DrawingPad4.png'
import draw3 from '../../../imgs/DrawingPad5.png'
import draw4 from '../../../imgs/DrawingPad6.png'
import './landcard.scss'

function LandCard(props) {
  const descriptions = [
    {
      id: 1,
      title: 'Draw & Play back',
      blerb: 'Have your artists create a masterpiece! Then have them watch what they made, with the playback feature',
      pic1: {draw1},
      pic2: {draw2},
    },
    {
      id: 2,
      title: 'Save to Gallery & Share',
      blerb: 'Save creations and send to family and friends',
      pic1: {draw3},
      pic2: {draw4},
    },
    {
      id: 3,
      title: 'Coloring book',
      blerb: 'Select a coloring page, choose some colors, and fill areas',
      pic1: ``,
      pic2: ``,
    },
    {
      id: 4,
      title: 'Learn by Tracing',
      blerb: 'Trace mode lets your youngster learn by tracing, There are currently 4 options to choose from - letters, numbers, shapes, and words',
      pic1: '',
      pic2: '',
      pic3: '',
      pic4: ''
    }
  ]
  return (
    <>
      {descriptions.map((description) => (
        <MDBCard>
          <MDBCardTitle>
            {description.title}
          </MDBCardTitle>
          <MDBCardText>
            {description.blerb}
          </MDBCardText>
          <MDBCardImage src={description.pic1} />
          <MDBCardImage src={description.pic2} />
        </MDBCard>
      ))}
    </>
  )
}

export default LandCard