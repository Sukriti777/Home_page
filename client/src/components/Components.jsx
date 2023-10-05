import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'

const Components = () => {
    return (
        <>
            <div className='m-7 p-10 text-3xl font-bold'>
                Most Popular Arts
                <hr className="w-100 h-0.5 mx-auto my-4 auto-cols-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-orange-700 relative bottom-5"></hr>
                <div className='flex'>
                <Comp1/>
                <Comp1/> 
                <Comp1/>  
                </div>
            </div>
            <div className='m-7 p-10 text-3xl font-bold'>
                Most Trending Arts
                <hr className="w-100 h-0.5 mx-auto my-4 auto-cols-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-orange-700 relative bottom-5"></hr>
                <div className='flex '>
                <Comp2/>
                <Comp2/>
                <Comp2/>
                <Comp2/>
                </div>
            </div>
        </>
    )
}

export default Components
