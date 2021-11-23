import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardBody } from 'mdb-react-ui-kit'
import draw1 from '../../../imgs/DrawingPad3.png'
import draw2 from '../../../imgs/DrawingPad4.png'
import draw3 from '../../../imgs/DrawingPad5.png'
import draw4 from '../../../imgs/DrawingPad6.png'


//const About = cards.map((card) =>
function About() {
  const descriptions = [
    {
      id: 1,
      title: 'Draw & Play back',
      blerb: 'Have your artists create a masterpiece! Then have them watch what they made, with the playback feature',
      pic1: `{draw1}`,
      pic2: '../../../imgs/DrawingPad4.png',
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
    <Carousel className='crd'>
      {descriptions.map((description) => (
        <Carousel.Item item key={description.id} className='crd'>
          <MDBCard background='success' alignment='center'>
            <MDBCardBody >
              <MDBCardTitle className='info'>
              {description.title}
              </MDBCardTitle>
              <MDBCardText className='info'>
                {description.blerb}
              </MDBCardText>
              <MDBCardImage src={description.pic1} />
              <MDBCardImage src={description.pic2} />
            </MDBCardBody>
              
          </MDBCard>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
export default About