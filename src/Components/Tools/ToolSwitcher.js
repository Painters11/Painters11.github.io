import React, { Component } from 'react'


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
        <div>
        <input type="radio" value="Pen" name="tool" onChange={this.onChangeValue}/> Pen
        <input type="radio" value="Circle" name="tool" onChange={this.onChangeValue}/> Circle
        <input type="radio" value="Rectangle" name="tool" onChange={this.onChangeValue}/> Rectangle
    
        </div>
        )
    }
}

export default ToolSwitcher