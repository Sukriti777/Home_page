import React from 'react'
import image2 from '../assets/image2.jpg'

function Comp2() {
  return (
    <div className='h-[30vh] w-[30vh] mr-20 mb-16'>
      <a href="#">
        <img className='bg-white rounded-full shadow-2xl' src={ image2 } alt="image" />
      </a>
      <p className='bg-gray font-bold text-2xl relative left-10 mt-4'>Indian Arts</p>
    </div>
  )
}

export default Comp2
