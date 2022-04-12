import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = ({ width, ...props }) => {
  let len = width < 700 ? 1 : 4

  if(width>700){
    width=1140
  }
  const loaderArr = Array.from({ length: len }, (x, i) => i + 1)
  let xn = 5
  let yn = 5
  let zn = 5

  return (
    <div className='loading'>
      <ContentLoader
        speed={1}
        viewBox={`0 0 ${width} 1000`}
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}
      >
        <rect x='5' y='20' rx='0' ry='0' width='200' height='306' />
        {loaderArr.map((loader) => {
          xn = 220 + xn
          return (
            <rect
              key={xn}
              x={xn}
              y='20'
              rx='0'
              ry='0'
              width='200'
              height='306'
            />
          )
        })}

        <rect x='5' y='340' rx='0' ry='0' width='200' height='306' />
        {loaderArr.map((loader) => {
          yn = 220 + yn
          return (
            <rect
              key={yn}
              x={yn}
              y='340'
              rx='0'
              ry='0'
              width='200'
              height='306'
            />
          )
        })}
        <rect x='5' y='660' rx='0' ry='0' width='200' height='306' />
        {loaderArr.map((loader) => {
          zn = 220 + zn
          return (
            <rect
              key={zn}
              x={zn}
              y='660'
              rx='0'
              ry='0'
              width='200'
              height='306'
            />
          )
        })}
      </ContentLoader>
    </div>
  )
}

export default Loader
