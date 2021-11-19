import React, { useRef, useEffect, useState } from 'react'


const Line = () => {
    const [drawing, setDrawing] = useState(false)

    const canvasRef = useRef(null)
    const ctxRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerHeight * 2
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        const ctx = canvas.getContext("2d")
        ctx.scale(2, 2)
        ctx.lineCap = "round"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 5
        ctxRef.current = ctx
        
    }, [])
    const getMousePos = (canvas, e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
    }
    const handleMouseDown = (event) => {
        const pos = getMousePos(canvasRef.current, event)
        ctxRef.current.beginPath()
        ctxRef.current.moveTo(pos.x, pos.y)
        setDrawing(true)

    }

    const handleMouseMove = (event) => {
        if(!drawing) {
            return
        }
        const pos = getMousePos(canvasRef.current, event)     
        ctxRef.current.lineTo(pos.x, pos.y)
        ctxRef.current.stroke()


    }

    const handleMouseUp = () => {
        ctxRef.current.closePath()
        setDrawing(false)
    }

    return (
            <canvas id="canvas"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            ref={canvasRef}
            
            >
            Paint
        </canvas>

)
}

export default Line