import { Center, Container, Input, InputGroup, InputRightAddon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import FAQbg from '../assets/FAQbg.png'
import { BiSearchAlt } from 'react-icons/bi'

const FAQhero = () => {
    return (
        <>
            <div className="bg-red-300 -translate-y-4"
                style={ {
                    backgroundImage: `url(${FAQbg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    // height: '40vh'
                } }
            >
                <Container>
                    <Center>
                        <Stack spacing='4'>
                            <Text marginTop={ 5 } fontSize='6xl' textAlign={ 'center' } className='merrifont'>Welcome !<br />
                                How Can<br />
                                We Help You ?</Text>
                            <InputGroup marginBottom={ 30 }>
                                <Input bg='white' type='text' placeholder='Search' />
                                <InputRightAddon children={ <><BiSearchAlt size={ 30 } /></> } />
                            </InputGroup>
                        </Stack>

                    </Center>
                </Container>
            </div>
        </>
    )
}

export default FAQhero