import React from 'react';
import { ChakraProvider, extendTheme, Box, Text, Flex } from '@chakra-ui/react';
import { FaShoppingCart, FaTruck } from 'react-icons/fa';

const theme = extendTheme({
  styles: {
    global: {
      // Add global CSS styles here if needed
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" alignItems="center" justifyContent="center" h="100vh">
        <Text
          textAlign="center"
          color="black"
          fontSize="40px"
          fontWeight="normal"
          fontFamily="merrifont"
          textDecoration="underline"
        >
          What Do You Need Help With?
        </Text>
        <Flex alignItems="center" width="80%">
          <Box
            width="50%" // Set width to 50% for both boxes to make them square
            height="60%px" // Set a fixed height
            background="#FFB76B"
            boxShadow="20px 20px 10px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            border="1px solid black"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="20px" // Add padding to the box
          >
            <Flex direction="column" alignItems="center">
              <FaShoppingCart w={100} h={100} color="blue.500" />
              <Text
                textAlign="center"
                color="black"
                fontSize="20px"
                fontWeight="light"
                fontFamily="['merrifont']"
              >
                Shopping
                <br />
                With
                <br />
                Us
              </Text>
            </Flex>
          </Box>

          <Box
            width="50%" // Set width to 50% for both boxes to make them square
            height="60%px" // Set a fixed height
            background="#FFB76B"
            boxShadow="20px 20px 10px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            border="1px solid black"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="20px" // Add padding to the box
            margin="0 40px" // Add margin for spacing between the boxes
          >
            <Flex direction="column" alignItems="center">
              <FaTruck w={100} h={100} color="blue.500" />
              <Text
                textAlign="center"
                color="black"
                fontSize="20px"
                fontWeight="light"
                fontFamily="['merrifont']"
              >
                Selling
                <br />
                With
                <br />
                Us
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
