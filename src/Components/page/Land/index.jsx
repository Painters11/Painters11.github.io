import React from 'react'
import Logo from '../../misc/Logo'
import About from '../../shared/About'
import './land.scss'

function Land(props) {
  return (
    <div className='land'>
      <Logo />
      <div className='about'>
        <About />
      </div>
    </div>
  )
}

export default Land