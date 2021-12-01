import React from 'react'
import { NavLink } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit'
import Image from 'react-bootstrap/Image'
import './logo.scss'
import logo from '../../../imgs/Logo.png'

function Logo() {
  return (
    <div className='appbox'>
      <div className='title'>
        <h2>
          <Image src={logo} alt='Mint Painters, Encourage Your Young Artist' id='logo' />
        </h2>
      </div>
      <div className='buttonbox'>
        <MDBBtn color="success" id='left' className='logoButton'>
          <NavLink to="/404" className='link-light'>Download App</NavLink>
        </MDBBtn>
        <MDBBtn rounded color="success" id='right' className='logoButton'>
          <NavLink to="/canvas" className='link-light'>Try Out (Limited)</NavLink>
        </MDBBtn>
      </div>
    </div>
  )
}

export default Logo