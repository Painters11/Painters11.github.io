import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header() {
  return (
    <>
      <Navbar bg="light" expand='lg'>
        <Container fluid>
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/about" className='nav-link'>About</NavLink>
            <Nav.Link href="/canvas">Draw</Nav.Link>
            <Nav.Link href="/coloringbook">Coloring Book</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header