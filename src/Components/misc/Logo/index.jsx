import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import './logo.scss'

function Logo() {
  return (
    <>
      <div className='appbox'>
        <div className='title'>
          <h2>Mint Painters</h2>
          <p>Encourage your inner artist</p>
        </div>
        <div className='buttonbox'>
          <div>Download App (coming soon)</div>
          <div>Try Out (Limited)</div>
        </div>
      </div>
    </>
  )
}

export default Logo