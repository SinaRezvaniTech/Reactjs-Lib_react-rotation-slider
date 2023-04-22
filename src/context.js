import React, { useCallback, useState } from 'react'

const Context = React.createContext()
export const ContextProvider = ({ children }) => {
  //config
  const [strokeColor, setStrokeColor] = useState('#b0204460')
  const [deg, setDeg] = useState(180)
  //image config
  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [listImages, setListImages] = useState([])

  const slideHandler = ({ type, autoSlideDeg, imagesLenght }) => {
    //change center image
    console.log(mainImageIndex)
    const changeMainImageIndex = ({ type }) => {
      setMainImageIndex((current) => {
        if (type == 'prev') {
          if (current >= imagesLenght - 1) {
            return 0
          } else {
            return current + 1
          }
        } else {
          if (current <= 0) {
            return imagesLenght - 1
          } else {
            return current - 1
          }
        }
      })
    }
    //if auto slide is active
    if (autoSlideDeg) {
      changeMainImageIndex({ type: 'next' })
      setDeg((current) => current + 360 / listImages.length)
    } else {
      //if outo slide is not active
      if (type == 'next') {
        changeMainImageIndex({ type: 'next' })
        setDeg(deg + 360 / listImages.length)
      } else {
        changeMainImageIndex({ type: 'prev' })
        setDeg(deg - 360 / listImages.length)
      }
    }
  }

  return (
    <Context.Provider
      value={{
        strokeColor,
        setStrokeColor,
        deg,
        setDeg,
        mainImageIndex,
        setMainImageIndex,
        listImages,
        setListImages,
        slideHandler
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
