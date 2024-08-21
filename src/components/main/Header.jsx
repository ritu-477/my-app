import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <div className='d-flex gap-5'>
          <Link to="/">header</Link>
          <Link to="/about">About</Link>
      <Link to="/hero">hero</Link>
      <p>hello</p>
      </div>
    
  )
}

export default Header