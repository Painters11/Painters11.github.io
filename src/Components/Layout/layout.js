import React, { Fragment } from 'react'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'

function Layout(props) {
  
  return (
    <Fragment>
      <Header />
        {props.children}
      <Footer />
    </Fragment>
  )
}

export default Layout