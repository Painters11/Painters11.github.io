import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import './logo.scss'
import logo from '../../../imgs/Logo.png'

function Logo() {
  return (
    <div className='topdown'>
      <div className='appbox'>
        <div className='title'>
          <h2>
            <img src={logo} alt='Mint Painters, Encourage Your Young Artist' id='logo' />
          </h2>
        </div>
        <div className='buttonbox'>
          <MDBBtn color="success" id='left' className='logoButton'>Download App</MDBBtn>
          <MDBBtn rounded color="success" id='right' className='logoButton'>Try Out (Limited)</MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default Logo