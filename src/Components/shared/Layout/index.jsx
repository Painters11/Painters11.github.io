import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Layout(props) {
  
  return (
    <Fragment>
      <Header />
        <div className='render'>
          {props.children}
        </div>
      <Footer />
    </Fragment>
  )
}

export default Layout