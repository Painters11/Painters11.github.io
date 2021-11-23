import React from 'react'
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
      <div className='text-left p-2'>
        <NavLink to='/team' className='linktext'>
          <Image src={footer} />
        </NavLink>
      </div>
      <div className='text-center p-3'>
        <NavLink to='https://github.com/Painters11/Painters11.github.io' className='linktext'>
          <Image src={repo} />
        </NavLink>
      </div>
      <div className='text-right p-4'>
        <NavLink to='https://github.com/Painters11'>
          <Image src={cw}  />
        </NavLink>
      </div>
    </MDBFooter>
  )
}

export default Footer