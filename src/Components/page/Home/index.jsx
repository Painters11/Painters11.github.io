import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import Logo from '../../misc/Logo'
import './home.scss'

function Home(props) {
  return (
    <div className='home'>
      <Logo className='appBox'/>
    </div>
  )
}

export default Home