# react-rotation-slider

[![NPM](https://img.shields.io/npm/v/react-rotation-slider.svg)](https://www.npmjs.com/package/react-rotation-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-rotation-slider
```

## Usage

```jsx
import React, { Component } from 'react'

import { ReactRotationSlider } from 'react-rotation-slider'
import 'react-rotation-slider/dist/index.css'

const Example = ()=> {
  let images =  [img1,img2,img3,...]
  render() {
    return <ReactRotationSlider images={images}/>
  }
}
```

> other parameters

```jsx

const Example = ()=> {
  let images =  [img1,img2,img3,...]
  render() {
    return <ReactRotationSlider images={images}  borderColor={"#e33650"}
    autoSlide={false} showBtns={false} />
  }
}
```

> Custom buttons using methods

```jsx
import React, {useRef} from "react";

const Example = ()=> {
  // ref to ReactRotationSlider
  const ref = useRef();

  let images =  [img1,img2,img3,...]

  render() {
    return <>
    <ReactRotationSlider  images={images} ref={ref}/>

    <p onClick={() => ref.current.next()}>
      Next
    </p>

    <p onClick={() => ref.current.prev()}>
      Next
    </p>
    </>
  }
}
```

## Donate Me

My Brain needs two urgent coffees to continue working. Buy one or two coffees for me ❤️ :

TRX : TJ6AvqZrH1N1Y51r6uMZqxWncrwy3ANac5
USDT : 0x048C5aB5125aF59b2B589090Ea218E46927dAF74

## License

MIT © [SinaRezvaniTech](https://github.com/SinaRezvaniTech)
