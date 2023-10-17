import React from 'react'
import { Center, Container, Input, InputGroup, Stack, Text } from '@chakra-ui/react'
import AboutBG from '../assets/AboutBG.jpg'

const AboutHero = () => {
    return (
        <>
            <div className="bg-red-300 -translate-y-4"
                style={ {
                    backgroundImage: `url(${AboutBG})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    // height: '100vh'
                } }
            >
                <Container>
                    <Center h='100vh'>
                        <Stack spacing='4'>
                            <div className='bg-[#FFA048] p-24 rounded-[50%]'
                                style={ {
                                    boxShadow: "2.5em 2.5em #D47130"
                                } }>
                                <Text
                                    marginTop={ 5 }
                                    fontSize='7xl'
                                    textAlign={ 'center' }
                                    color={ 'white' }
                                    className='kavoonfont'
                                >
                                    The Story <br />
                                    Behind<br />
                                    Knothastags<br />
                                </Text>
                            </div>

                        </Stack>

                    </Center>
                </Container>
            </div>
        </>
    )
}

export default AboutHero