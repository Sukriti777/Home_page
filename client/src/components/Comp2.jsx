import React from 'react'
import image2 from '../assets/image2.jpg'

function Comp2() {
  return (
    <div className=' h-44 w-44 mr-20'>
      <img className='bg-white rounded-full drop-shadow-lg' src={image2} alt="image" />
      <p className='bg-gray font-bold text-lg relative left-12 mt-4'>Indian Arts</p>
    </div>
  )
}

export default Comp2
