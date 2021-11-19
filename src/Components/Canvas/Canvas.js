import React, { Component } from 'react'
import Pen from './Pen.js'
import Rectangle from './Rectangle.js'
import Circle from './Circle.js'


class Canvas extends Component {
    constructor (props) {
        super(props)

        this.state = {
            penSelected: false,
            rectangleSelected: false,
            circleSelected: false
            
        }
    }


   
    componentDidUpdate(prevProps) {
        const { toolSelected } = this.props
        if(toolSelected !== prevProps.toolSelected) {
            console.log(toolSelected)
            if(toolSelected === 'Pen'){
                this.setState({ 
                    penSelected: true,
                    rectangleSelected: false,
                    circleSelected: false
                })
            } else if(toolSelected === 'Rectangle'){
                this.setState({ 
                    penSelected: false,
                    rectangleSelected: true,
                    circleSelected: false
                })
            } else if (toolSelected === 'Circle') {
                this.setState({ 
                    penSelected: false,
                    rectangleSelected: false,
                    circleSelected: true
                })
            }
        }
        
    }

   

    render() {
        
        return (
            <>
                {this.state.penSelected ? <Pen isSelected={this.state.penSelected}/> : ''}
                {this.state.rectangleSelected ? <Rectangle isSelected={this.state.rectangleSelected}/> : ''}
                {this.state.circleSelected ? <Circle isSelected={this.state.circleSelected}/> : ''}
            </>
        )
    }

}

export default Canvas