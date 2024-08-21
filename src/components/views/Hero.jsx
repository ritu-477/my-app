import React from 'react'
import { Link } from 'react-router-dom'


export const Hero = () => {
  return (
    <div className='d-flex gap-2'>
      <Link to="/">header</Link>
      <Link to="/about">about</Link>
      <Link to="/hero">hero</Link>
    </div>
  )
}
export default Hero
