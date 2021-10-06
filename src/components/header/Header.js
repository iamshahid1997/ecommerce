import React from 'react'

const Header = () => {
  return (
    <div className = 'px-4 py-2 shadow border rounded'>
      <div className = 'grid grid-cols-3'>
        <span className = 'flex justify-start font-semibold'>Icon</span>
        <p className = 'flex justify-center font-bold invisible md:visible'>Shopping App</p>
        <div className = 'text-right grid grid-cols-3 font-semibold'>
          <p>Shop</p>
          <p>Contact</p>
          <p>Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default Header
