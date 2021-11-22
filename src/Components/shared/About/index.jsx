import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import LandCard from '../LandCard'


//const About = cards.map((card) =>
function About() {
  return (
    <Carousel>
      <Carousel.Item>
        <LandCard /> 1
      </Carousel.Item>
      <Carousel.Item>
        <LandCard /> 2
      </Carousel.Item>
      <Carousel.Item>
        <LandCard /> 3
      </Carousel.Item>
    </Carousel>
  )
}
export default About