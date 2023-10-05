import React from 'react'
import image2 from '../assets/image2.jpg'

function Comp2() {
  return (
    <div className=' h-44 w-44 mr-20'>
      <a href="#">
      <img className='bg-white rounded-full shadow-2xl' src={image2} alt="image" />
      </a>
      <p className='bg-gray font-bold text-lg relative left-12 mt-4'>Indian Arts</p>
    </div>
  )
}

export default Comp2
