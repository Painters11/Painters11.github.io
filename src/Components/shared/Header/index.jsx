import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarToggler, MDBCollapse, MDBNavbarBrand } from 'mdb-react-ui-kit'
import Image from 'react-bootstrap/Image'
import logo from '../../../imgs/NavbarLogo.png'

function Header() {
  const [showNavRight, setShowNavRight] = useState(false)
  
  const heads = [
    {
      id: 1,
      text: 'Team',
      url: '/team'
    },
    {
      id: 2,
      text: 'Draw',
      url: '/canvas'
    },
    {
      id: 3,
      text: 'Coloring Book',
      url: '/coloringbook'
    }
  ]
  
  return (
    <MDBNavbar bgColor="light" expand='lg' className='p-1'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='p-1'>
          <NavLink to="/" className='nav-link'>
            <Image src={logo} />
          </NavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
          right
        >
          <MDBIcon icon='bars' fas className='fixed-right'/>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight} id='menu'>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            {heads.map((head) => (
              <MDBNavbarItem item key={head.id}>
                <NavLink to={head.url} className='nav-link link-dark'>
                  {head.text}
                </NavLink>
              </MDBNavbarItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header