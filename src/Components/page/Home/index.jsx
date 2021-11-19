import React from 'react'
import Layout from '../../shared/Layout'
import { Nav, Button } from 'react-bootstrap'

function Home(props) {
  return (
    <Layout>
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
          <Nav.Link href="/ToolSwitcher">
            Draw
          </Nav.Link>
        </Button>
      </div>
    </Layout>
  )
}

export default Home