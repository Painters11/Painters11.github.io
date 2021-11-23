import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Image from 'react-bootstrap/Image'
import Github from '../../misc/sm-icons/Github'
import footer from '../../../imgs/FooterLogo.png'
import repo from '../../../imgs/VisitRepo.png'
import cw from '../../../imgs/CLW.png'
import './footer.scss'

function Footer() {
  
  return (
    <MDBFooter className='text-white text-center text-lg-left fixed-bottom' id='footer'>
      <Nav className='text-left p-2'>
        <NavLink to='/team' className='linktext'>
          <Image src={footer} />
        </NavLink>
      </Nav>
      <Nav className='text-center p-3'>
        <NavLink to='https://github.com/Painters11/Painters11.github.io' className='linktext'>
          <Image src={repo} />
        </NavLink>
      </Nav>
      <Nav className='text-right p-4'>
        <NavLink to='https://github.com/Painters11'>
          <Image src={cw}  />
        </NavLink>
      </Nav>
    </MDBFooter>
  )
}

export default Footer