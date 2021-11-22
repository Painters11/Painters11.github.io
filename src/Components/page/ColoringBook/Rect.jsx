import React, { useRef } from 'react'


const Rect = (props) => {
    const svgRef = useRef(null)
    const color = props.color

    const updateFill = (event) => {
        svgRef.current = event.target.attributes.id.value
        const target = (document.getElementById(svgRef.current))
        target.setAttribute('fill', color)
    }

    return (
        <>
            <svg version="1.1" width="300" height="200">
            <rect id="rect" width="100%" height="100%" fill="current" onClick={updateFill}/>
            </svg>

        </>
    )
}

export default Rect