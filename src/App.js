import React, { Fragment } from 'react'
import { useRoutes } from 'hookrouter'
import routes from './router'
import Layout from './components/Layout/layout.js'

function App() {
  const routeResult = useRoutes(routes)
  return (
    <Fragment>
      <Layout />
    </Fragment>,
    routeResult
  )
}

export default App
