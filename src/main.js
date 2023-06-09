import React, {
  useEffect,
  useState,
  useContext,
  forwardRef,
  useImperativeHandle
} from 'react'
import styles from './index.module.css'

//context
import Context from './context'
export const Main = forwardRef(
  ({ autoSlide, images, showBtns, borderColor }, ref) => {
    useImperativeHandle(ref, () => ({
      next() {
        slideHandler({ type: 'next' })
      },
      prev() {
        slideHandler({ type: 'prev' })
      }
    }))
    //context
    const {
      strokeColor,
      setStrokeColor,
      deg,
      setDeg,
      mainImageIndex,
      listImages,
      setListImages,

      setMainImageIndex
    } = useContext(Context)

    //auto slide options
    const autoRotate = () => {
      setInterval(
        () => {
          //change center image
          const changeMainImageIndex = ({ type }) => {
            setMainImageIndex((current) => {
              if (type == 'prev') {
                if (current >= images.length - 1) {
                  return 0
                } else {
                  return current + 1
                }
              } else {
                if (current <= 0) {
                  return images.length - 1
                } else {
                  return current - 1
                }
              }
            })
          }
          changeMainImageIndex({ type: 'next' })
          setDeg((current) => current + 360 / images.length)
        },
        autoSlide == true ? 5000 : autoSlide
      )
    }
    useEffect(() => {
      setListImages(images)
      //borderColor
      borderColor && setStrokeColor(borderColor)

      if (autoSlide) {
        autoRotate()
      }
    }, [])

    const slideHandler = ({ type, autoSlideDeg }) => {
      //change center image
      const changeMainImageIndex = ({ type }) => {
        setMainImageIndex((current) => {
          if (type == 'prev') {
            if (current >= listImages.length - 1) {
              return 0
            } else {
              return current + 1
            }
          } else {
            if (current <= 0) {
              return listImages.length - 1
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
      <div className={styles.wrapper}>
        <div
          style={{
            transform: `rotate(${deg}deg)`,
            backgroundImage: ` url(
            "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100%' ry='100%' stroke='%23${strokeColor.slice(
              1
            )}' stroke-width='4' stroke-dasharray='20%2c 46%2c 20%2c 22' stroke-dashoffset='100' stroke-linecap='square'/%3e%3c/svg%3e "
          )`
          }}
          className={styles.slider}
        >
          {listImages.map((i, index) => (
            <div key={index}>
              {/* Center image */}
              <div
                style={{
                  transform: index == mainImageIndex ? 'scale(1)' : 'scale(0)'
                }}
                className={styles.centerImage}
              >
                <img
                  style={{
                    transform:
                      deg < 0
                        ? `rotate(${Math.abs(deg)}deg)`
                        : `rotate(-${deg}deg)`
                  }}
                  src={i}
                  alt='img'
                  className={styles.centerImageImg}
                />
              </div>

              {/* Items */}
              <div
                index={index}
                style={{
                  transform: `rotate(${(360 / listImages.length) * index}deg)`
                }}
                className={styles.sliderItem}
              >
                <div
                  style={{
                    transform: `rotate(-${
                      (360 / listImages.length) * index
                    }deg)`
                  }}
                >
                  <img
                    style={{
                      transform:
                        deg < 0
                          ? `rotate(${Math.abs(deg)}deg)`
                          : `rotate(-${deg}deg)`
                    }}
                    src={i}
                    alt=''
                    className={styles.sliderItemImg}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {showBtns && (
          <div className={styles.btnWrapper}>
            <span
              onClick={() => slideHandler({ type: 'prev' })}
              style={{ color: '#ffff', backgroundColor: '#d2a622' }}
              className={styles.btnWrapperSpan}
            >
              Prev
            </span>
            <span
              onClick={() => slideHandler({ type: 'next' })}
              style={{ color: '#ffff', backgroundColor: '#2294d2' }}
              className={styles.btnWrapperSpan}
            >
              Next
            </span>
          </div>
        )}
      </div>
    )
  }
)
