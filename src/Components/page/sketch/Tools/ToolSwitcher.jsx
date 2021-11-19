import React, { Component } from 'react'
import Layout from '../../../shared/Layout'
import Canvas from '../Canvas'
import './toolswitcher.scss'


class ToolSwitcher extends Component {
    constructor (props) {
        super(props)
        this.state = {
            toolSelected: ""
        }
        this.onChangeValue = this.onChangeValue.bind(this)
    }

    onChangeValue(event) {
       this.setState({ toolSelected: event.target.value })
    }
   

    render() {
        return (
        <Layout>
          <div className='drawBox'>
            <Canvas toolSelected={this.state.toolSelected}/>
          </div>
          <div className='toolBelt'>
            <input type="radio" value="Pen" name="tool" onChange={this.onChangeValue}/> Pen
            <input type="radio" value="Circle" name="tool" onChange={this.onChangeValue}/> Circle
            <input type="radio" value="Rectangle" name="tool" onChange={this.onChangeValue}/> Rectangle
          </div>

        </Layout>
        )
    }
}

export default ToolSwitcher