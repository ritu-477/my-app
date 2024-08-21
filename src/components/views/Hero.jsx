import React from 'react'
import { Link } from 'react-router-dom'


export const Hero = () => {
  return (
    <div className='d-flex gap-4'>
      <Link to="/">header</Link>
      <Link to="/about">about</Link>
      <Link to="/hero">hero</Link>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto repellendus dicta aut quasi, nostrum ex in, placeat distinctio itaque accusantium! Repellat harum distinctio deserunt ducimus vitae repellendus, velit reiciendis.</p>
    </div>
  )
}
export default Hero
