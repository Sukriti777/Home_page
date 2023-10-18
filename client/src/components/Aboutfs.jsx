import React from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import person from '../assets/person.jpg'
import Carousel from "nuka-carousel";



const Aboutfs = () => {
    return (
        <>
            <div className='text-5xl text-center mt-28 mb-10'>Meet The Founders</div>
            <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide} className="custom-carousel-button">
                        {/* Custom content for the Prev button */}
                        <div className='ml-40 cursor-pointer'><AiFillLeftCircle size='30px' /></div>
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} className="custom-carousel-button">
                        {/* Custom content for the Next button */}
                        <div className='mr-40 cursor-pointer'><AiFillRightCircle size='30px' /></div>
                    </button>
                )}>


                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-[29rem] items-center flex justify-center rounded-3xl bg-[#FFA264]'>
                        <div className='w-[29%] mr-20'>
                            <div className='border-8 border-[#D46E2F]'>
                                <img src={one} alt="" />
                            </div>
                        </div>
                        <div className='bg-white rounded-3xl shadow-inner-thick flex justify-center items-center h-80 w-[47%]'>
                            <div className='bg-white border-8 border-[#F6DE8D] text-center h-64 w-[80%]'>
                                <div className='m-0 '>Co-Founder, CEO & COO</div>
                                <div className='m-0 text-3xl font-bold font-sans'>Adv. Ritika Kumari</div>
                                <div className='m-0 '>Ritika Kumari is an advocate who comes into play on the legal side of the company. She is excellent at handling the day-to-day operations of the company. While working in the background, she is an expert at organizing the logistics of the company and ensures that the company is run smoothly, with no hiccups in the activities.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-[29rem] items-center flex justify-center rounded-3xl bg-[#FFA264]'>
                        <div className='w-[29%] mr-20'>
                            <div className='border-8 border-[#D46E2F]'>
                                <img src={two} alt="" />
                            </div>
                        </div>
                        <div className='bg-white rounded-3xl shadow-inner-thick flex justify-center items-center h-80 w-[47%]'>
                            <div className='bg-white border-8 border-[#F6DE8D] text-center h-64 w-[80%]'>
                                <div className='m-0 '>Co-Founder & CMO</div>
                                <div className='m-0 text-3xl font-bold font-sans'>Ashish Kumar</div>
                                <div className='m-0 '>Ashish Kumar has strong experience In the marketing sphere of the company, we have Ashish Kumar taking care of it. He is responsible for marketing the company online, and even offline. He makes sure that the team works well together which in turn ensures that offline and online projects are executed excellently, every time</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-[29rem] items-center flex justify-center rounded-3xl bg-[#FFA264]'>
                        <div className='w-[29%] mr-20'>
                            <div className='border-8 border-[#D46E2F]'>
                                <img src={three} alt="" />
                            </div>
                        </div>
                        <div className='bg-white rounded-3xl shadow-inner-thick flex justify-center items-center h-80 w-[47%]'>
                            <div className='bg-white border-8 border-[#F6DE8D] text-center h-64 w-[80%]'>
                                <div className='m-0 '>CFO</div>
                                <div className='m-0 text-3xl font-bold font-sans'>Sadhna Devi</div>
                                <div className='m-0 '>A social worker, and an artist, Sadhna Devi, create innovative strategies for the company to act on. She is also the team member that handles the budget and financial statements of the company. This along with her creative side allows her to come up with strategies that work well for the team members and the company.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>

            <div className='text-5xl text-center mt-28 mb-10'>Meet The Team</div>
            <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide} className="custom-carousel-button">
                        {/* Custom content for the Prev button */}
                        <div className='ml-40 cursor-pointer'><AiFillLeftCircle size='30px' /></div>
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} className="custom-carousel-button">
                        {/* Custom content for the Next button */}
                        <div className='mr-40 cursor-pointer'><AiFillRightCircle size='30px' /></div>
                    </button>
                )}>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-[29rem] items-center flex justify-center rounded-3xl bg-[#F6DE8D]'>
                        <div className='w-[29%] mr-20'>
                            <div className='border-8 border-[#D46E2F]'>
                                <img src={person} alt="" />
                            </div>
                        </div>
                        <div className='bg-white rounded-3xl shadow-inner-thick flex justify-center items-center h-80 w-[47%]'>
                            <div className='bg-white border-8 border-[#F6DE8D] text-center h-64 w-[80%]'>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias?</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-[29rem] items-center flex justify-center rounded-3xl bg-[#F6DE8D]'>
                        <div className='w-[29%] mr-20'>
                            <div className='border-8 border-[#D46E2F]'>
                                <img src={person} alt="" />
                            </div>
                        </div>
                        <div className='bg-white rounded-3xl shadow-inner-thick flex justify-center items-center h-80 w-[47%]'>
                            <div className='bg-white border-8 border-[#F6DE8D] text-center h-64 w-[80%]'>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, error!</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-[29rem] items-center flex justify-center rounded-3xl bg-[#F6DE8D]'>
                        <div className='w-[29%] mr-20'>
                            <div className='border-8 border-[#D46E2F]'>
                                <img src={person} alt="" />
                            </div>
                        </div>
                        <div className='bg-white rounded-3xl shadow-inner-thick flex justify-center items-center h-80 w-[47%]'>
                            <div className='bg-white border-8 border-[#F6DE8D] text-center h-64 w-[80%]'>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, eligendi.</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>
        </>
    )
}

export default Aboutfs
