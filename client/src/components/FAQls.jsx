import React from 'react'
import { AiFillGift } from 'react-icons/ai';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
} from '@chakra-ui/react'

const Faqls = () => {
    return (
        <div >
            <div className='text-center mt-12 text-5xl'>
                FAQs
            </div>
            <div className="bg-[#6d6d6d] ml-[44%] mt-3 w-[12%] h-0.5 mb-8"></div>
            <div className='flex mb-16'>
                <div className='border-black border m-14 w-[25%] h-fit shadow-xl shadow-gray-500 bg-[#FFEDDA]'>
                    <div className="container mx-5">
                        <Box w="80%" bg="">
                            <Stack spacing={4}>
                                <Accordion allowMultiple>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontSize="2xl" flex='1' textAlign='left'>
                                                    Orders
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            How to place an Order?
                                        </AccordionPanel>
                                        <AccordionPanel pb={4}>
                                            Status of my Order
                                        </AccordionPanel>
                                        <AccordionPanel pb={4}>
                                            Cancel Order
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontSize="2xl" flex='1' textAlign='left'>
                                                    Returns & Exchange
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            About our return policies
                                        </AccordionPanel>
                                        <AccordionPanel pb={4}>
                                            How to return an Item?
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontSize="2xl" flex='1' textAlign='left'>
                                                    Shipping Options
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Track Your Package
                                        </AccordionPanel>
                                        <AccordionPanel pb={4}>
                                            Late Shipment
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontSize="2xl" flex='1' textAlign='left'>
                                                    My Account
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Change your account settings
                                        </AccordionPanel>
                                        <AccordionPanel pb={4}>
                                            Change passwords
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" fontSize="2xl" flex='1' textAlign='left'>
                                                    Corporate Info
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Information
                                        </AccordionPanel>
                                    </AccordionItem>

                                </Accordion>
                            </Stack>
                        </Box>

                        <div className='ml-4 mt-4 h-32  text-2xl'>
                            <div className='text-red-600'>
                                FAQs
                            </div>
                            <div className='mt-4 flex bg-[#E6BEA0] w-[60%] h-12 text-center'>
                                <div className='mt-3 ml-3 text-[#D27C2C]'><AiFillGift /></div>
                                <div className='mt-3 ml-2 relative bottom-1 shadow-2xl'>Made For You</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-14 w-[63%] bg-[#FFEDDA] shadow-xl shadow-gray-400 border-black border'>
                    <div className='mt-2 text-3xl text-center'>
                        General topics
                    </div>
                    <div className="mt-10 text-center">
                        <input
                            type="text"
                            placeholder="Type Your Question Here"
                            className="border-2 border-gray-300 rounded-md px-2 py-1 hover:cursor-pointer w-[40em] h-[2.5em]"
                        />
                        <div className="mt-10 mb-10 border-2 ml-12 bg-white border-gray-300 rounded-sm px-2 hover:cursor-pointer w-[50em] h-[60em]">
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Faqls