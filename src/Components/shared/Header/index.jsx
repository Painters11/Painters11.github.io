import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from '../../../imgs/NavbarLogo.png'

function Header() {
  return (
<>
    <div className='nav'>
      <Navbar bg="light" expand='md' id='nav' >
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/" className='nav-link'>
              <Image src={logo} />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/team" className='nav-link'>Team</NavLink>
              <NavLink to="/canvas" className='nav-link'>Draw</NavLink>
              <Nav.Link href="/coloringbook">Coloring Book</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default Header