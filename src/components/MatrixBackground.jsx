import React, { useEffect, useRef } from 'react'

const MatrixBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
    const matrixArray = matrix.split("")

    const fontSize = 10
    const columns = canvas.width / fontSize

    // Array to track the y position of each column
    const drops = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    // Drawing the characters
    function draw() {
      // Black BG for the canvas
      // Translucent to show trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0' // Green text
      ctx.font = fontSize + 'px monospace'

      // Looping over drops
      for (let i = 0; i < drops.length; i++) {
        // A random character
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        
        // x = i*fontSize, y = value of drops[i]*fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Incrementing y coordinate
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20 z-0"
      style={{ zIndex: 0 }}
    />
  )
}

export default MatrixBackground 