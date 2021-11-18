import React, {useState, useRef} from 'react'

import './App.css'

function App() {
  const [mouseIn, setMouseIn] = useState(false)
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)

  const srcImg = 'https://images3.alphacoders.com/112/1121877.jpg'

  const imgWrap = useRef(null)

  const mWidth = imgWrap?.current?.offsetWidth;
  const mHeight = imgWrap?.current?.offsetHeight

  return (
    <div className="App">
      <div
        className="image-wrapper"
        onMouseMove={e => {
          setMouseIn(true)
          setCursorX(((e.clientX - imgWrap?.current?.offsetLeft) - mWidth / 2) / mWidth * 100)
          setCursorY(((e.clientY - imgWrap?.current?.offsetTop) - mHeight / 2) / mHeight * 100)
        }}
        onMouseLeave={() => {
          setMouseIn(false)
        }}
        ref={imgWrap}
      >
        <img
          src={srcImg}
          alt="Cyberpank"
          style={mouseIn
            ? {transform: `translate(${-cursorX}%, ${-cursorY}%) scale(2.5)`, cursor: 'crosshair'}
            : {transform: 'scale(1)'}
          }
        />
      </div>
    </div>
  )
}

export default App
