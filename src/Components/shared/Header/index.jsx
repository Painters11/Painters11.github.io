import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBNavbarBrand } from 'mdb-react-ui-kit'
import Image from 'react-bootstrap/Image'
import logo from '../../../imgs/NavbarLogo.png'

function Header() {
  const [showNavRight, setShowNavRight] = useState(false)
  
  return (
    <MDBNavbar bgColor="light" expand='lg' id='nav' >
      <MDBContainer fluid>
        <MDBNavbarBrand>
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
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight} id='menu'>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <NavLink to="/team" className='nav-link'>Team</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/canvas" className='nav-link'>Draw</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/coloringbook" className='nav-link'>Coloring Book</NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header