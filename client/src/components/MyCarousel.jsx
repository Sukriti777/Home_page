import React from 'react'
import Carousel from 'nuka-carousel'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import bgCarousel from '../assets/bgCarousel.png'
const MyCarousel = () => {
    return (
        <>
            <div className="container mx-auto max-w-5xl  my-5">
                <Carousel
                    renderCenterLeftControls={ ({ previousSlide }) => (
                        <button onClick={ previousSlide }>
                            <div className="bg-white p-2 rounded-full border-4 border-[#F2E7D8]">
                                <GrFormPrevious className="h-12 w-12 svgs" />
                            </div>
                        </button>
                    ) }
                    renderCenterRightControls={ ({ nextSlide }) => (
                        <button onClick={ nextSlide }>
                            <div className=" bg-white p-2 rounded-full border-4 border-[#F2E7D8]">
                                <GrFormNext className="h-12 w-12 " style={ { fill: 'blue' } } />
                            </div>
                        </button>
                    ) }
                >
                    <div key="slide1" style={ {
                        padding: 20,
                        height: 250,
                        backgroundImage: `url(${bgCarousel})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '20px'
                    } } className=' m-8 rounded-3xl text-white '
                    >

                        <h3 className='displayfont font-normal text-2xl p-5'>
                            Best Deal Online On Arts & Painting
                        </h3>
                        <div className="px-8 ">
                            <h1 className='font-normal latofont text-3xl'>
                                Most Popular Arts
                            </h1>
                            <h2 className='latofont my-3 text-xl' > UP to 80% OFF</h2>
                        </div>
                    </div>
                </Carousel>

            </div>
        </>
    )
}

export default MyCarousel