import React from 'react'
import Layout from '../../Layout/layout.js'
import { Button } from 'react-bootstrap'

function Home(props) {
  return (
    <Layout>
      <h1>Hello Painters</h1>
      <div className="buttons">
        <Button
          href="#canvas"
          variant="primary"
        >
          Draw
        </Button>
      </div>
    </Layout>
  )
}

export default Home