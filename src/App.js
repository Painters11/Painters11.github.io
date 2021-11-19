import React, { Fragment } from 'react'
import Header from './Components/Header/Header.js'
// import Line from './Components/Canvas/Line.js'
// import Rectangle from './Components/Canvas/Rectangle.js'
// import Circle from './Components/Canvas/Circle.js'
import ToolSwitcher from './Components/Tools/ToolSwitcher.js';

function App() {
    return (

      <Fragment>
        <Header />
        {/* <Line /> */}
        {/* <Rectangle /> */}
        {/* <Circle /> */}
        <ToolSwitcher />
      </Fragment>
    

    )
  }

export default App;
