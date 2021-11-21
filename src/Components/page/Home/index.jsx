import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import './home.scss'

function Home(props) {
  return (
    <div className='home'>
      <div className='appbox'>
        <div className='title'>
          <h2>Mint Painters</h2>
          <p>Encourage your inner artist</p>
        </div>
        <div className='buttonbox'>
          <Button>Download App (coming soon)</Button>
          <Button>Try Out (Limited)</Button>
        </div>
      </div>
      <div className="buttons">
        <Button
          variant="primary"
        >
          <Nav.Link href="/canvas">
            Draw
          </Nav.Link>
        </Button>
      </div>
    </div>
  )
}

export default Home