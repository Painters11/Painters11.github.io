import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Layout(props) {
  
  return (
    <Fragment>
      <Header id='heads'/>
      <div className='render'>
        {props.children}
      </div>
      <Footer className='footer'/>
    </Fragment>
  )
}

export default Layout