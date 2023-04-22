import React, { forwardRef, useImperativeHandle } from 'react'
//components
import { Main } from './main'
//context
import { ContextProvider } from './context'

export const ReactRotationSlider = forwardRef(
  ({ borderColor, autoSlide, images, showBtns }, ref) => {
    return (
      <ContextProvider>
        <Main
          ref={ref}
          images={images}
          showBtns={showBtns}
          autoSlide={autoSlide}
          borderColor={borderColor}
        />
      </ContextProvider>
    )
  }
)
