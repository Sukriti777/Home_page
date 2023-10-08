import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'

const Components = () => {
    return (
        <>
            <div className='m-7 p-10 text-5xl mx-[5%] font-bold'>
                <div className='flex'>
                    Most Popular
                    <div className='text-[#D46C2F] ml-2'>
                        Arts
                    </div>
                </div>
                <div className="bg-[#E6BEA0] mt-3 h-1 mb-8">
                    <div className="bg-[#D0732F] h-1 w-[35%]"></div>
                </div>
                <div className='flex flex-wrap'>
                    <Comp1
                        title={ "Pot Collection" }
                        discount={ 56 }
                        newPrice={ 10499 }
                        oldPrice={ 14999 }
                        saved={ 4500 }
                    />
                    <Comp1
                        title={ "Pot Collection" }
                        discount={ 56 }
                        newPrice={ 10499 }
                        oldPrice={ 14999 }
                        saved={ 4500 }
                    />
                    <Comp1
                        title={ "Pot Collection" }
                        discount={ 56 }
                        newPrice={ 10499 }
                        oldPrice={ 14999 }
                        saved={ 4500 }
                    />
                </div>
            </div>
            <div className='m-7 p-10 relative bottom-16 mx-[5%] text-5xl font-bold'>
                <div className='flex'>
                    Most Trending
                    <div className='text-[#D46C2F] ml-2'>
                        Arts
                    </div>
                </div>
                <div className="bg-[#E6BEA0] mt-3 h-1 mb-8">
                    <div className="bg-[#D0732F] h-1 w-[35%]"></div>
                </div>
                <div className='flex flex-wrap '>
                    <Comp2 />
                    <Comp2 />
                    <Comp2 />
                    <Comp2 />
                </div>
            </div>
        </>
    )
}

export default Components
