import React from 'react'
import image from "../assets/image.jpg"

function Comp({title, description, newPrice, oldPrice, saved, discount }) {
    return (
        <div>
            <div className="w-72 mb-5 shadow-2xl mr-20 bg-[#F5F5F5] border-2 rounded-xl border-[#D46E2F]">
                <p className='w-[38%] h-[16%] p-2 relative left-[62%] rounded-tr-lg rounded-bl-lg flex items-center bg-[#D46C2F] text-white text-xl z-10'>
                    {discount}% OFF
                </p>
                <a href="#">
                    <img className="w-[79%] rounded-xl relative bottom-6 left-[11%]" src={image} alt="image" />
                </a>
                <div className="p-3 relative bg-[#eddbcd] rounded-b-xl ">
                    <a href="#">
                        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-bls">{title}</h5>
                    </a>
                    <div className='flex justify-between'>
                        <p className="text-xl font-bold text-gray-700 dark:text-black">₹{newPrice}</p>
                        <p className="text-xl font-bold text-gray-700 dark:text-gray-600 line-through">₹{oldPrice}</p>
                    </div>
                    <hr />
                    <p className="mb-2 text-xl font-bold text-gray-700 dark:text-green-600">Save ₹{saved}</p>
                </div>
            </div>
        </div>
    )
}

export default Comp
