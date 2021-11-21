import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'



const Header = () => (
<>
  <Navbar bg="primary" variant="dark" sticky='top'>
    <Container>
      <Nav className="me-auto justify-content-center">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/canvas">Draw</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
</>
)

export default Header