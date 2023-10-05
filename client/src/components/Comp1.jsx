import React from 'react'
import image from "../assets/image.jpg"

function Comp() {
    return (
        <div>
            <div className="w-72 h-82 mb-5 mr-20 bg-[#ffffff] border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                <p className='w-12 h-9 relative left-60 rounded-tr-lg rounded-bl-lg flex items-center bg-[#D46C2F] text-xs'>
                    56% OFF
                </p>
                <a href="#">
                    <img className="h-44 w-56 relative left-8 rounded-md" src={image} alt="image" />
                </a>
                <div className="p-5 bg-[#F5DFD0] rounded-b-lg mt-4">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-bls">Pot Collection</h5>
                    </a>
                    <div className='flex'>
                        <p className="mb-3 mr-5 text-sm font-normal text-gray-700 dark:text-black">₹10499</p>
                        <p className="mb-3 ml-5 text-sm font-normal text-gray-700 dark:text-black line-through">₹14999</p>
                    </div>
                    <hr className="w-30 h-0.5 my-1 bg-gray-100 border-0 rounded dark:bg-orange-700 relative bottom-2.5"></hr>
                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-green-700">Save ₹4500</p>
                </div>
            </div>

        </div>
    )
}

export default Comp
