import React, { useState, useRef } from 'react'

import { ReactRotationSlider } from 'react-rotation-slider'
import 'react-rotation-slider/dist/index.css'
const App = () => {
  const ref = useRef(null)

  return (
    <>
      <ReactRotationSlider
        ref={ref}
        images={[
          'https://roozaneh.net/wp-content/uploads/2019/09/%D8%B9%DA%A9%D8%B3-%D9%85%D9%86%D8%B8%D8%B1%D9%87-8.jpg.webp',
          'https://roozaneh.net/wp-content/uploads/2019/09/%D8%B9%DA%A9%D8%B3-%D9%85%D9%86%D8%B8%D8%B1%D9%87-8.jpg.webp',
          'https://roozaneh.net/wp-content/uploads/2019/09/%D8%B9%DA%A9%D8%B3-%D9%85%D9%86%D8%B8%D8%B1%D9%87-8.jpg.webp',
          'https://roozaneh.net/wp-content/uploads/2019/09/%D8%B9%DA%A9%D8%B3-%D9%85%D9%86%D8%B8%D8%B1%D9%87-8.jpg.webp',
          'https://roozaneh.net/wp-content/uploads/2019/09/%D8%B9%DA%A9%D8%B3-%D9%85%D9%86%D8%B8%D8%B1%D9%87-8.jpg.webp',
          'https://roozaneh.net/wp-content/uploads/2019/09/%D8%B9%DA%A9%D8%B3-%D9%85%D9%86%D8%B8%D8%B1%D9%87-8.jpg.webp'
        ]}
      />

      <p onClick={() => ref.current.next()}>next</p>
      <p onClick={() => ref.current.prev()}>prev</p>
    </>
  )
}
export default App
