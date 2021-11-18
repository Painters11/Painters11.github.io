import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'



const Header = () => (
<>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
    <Nav className="me-auto justify-content-center">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#paint">Paint</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
)

export default Header