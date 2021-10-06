import React from 'react'

const ProductBox = (props) => {
  return (
    <div className = 'flex justify-center border-2 p-4 items-center h-56 border-gray-700 col-span-3 md:col-span-1'>
      <div className = 'border-2 p-4 flex flex-col items-center border-gray-700'>
        <p className = 'font-bold'>{props.product}</p>
        <p>SHOP NOW</p>
      </div>
    </div>
  )
}

export default ProductBox
