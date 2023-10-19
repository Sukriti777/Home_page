import React from 'react';
import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import { FaShoppingBag, FaTruck } from 'react-icons/fa';

const textStyle = {
  textAlign: 'center',
  color: 'black',
  fontSize: '60px',
  fontWeight: 'light',
  fontFamily: 'Roboto',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  lineHeight: '1',
};

const ShoppingBox = () => {
  return (
    <Box
      w="750px"
      h="350px"
      backgroundColor="#FFB76B"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
        margin: "70px", // Add margin to create separation
      }}
    >
      <Box
        w="75%"
        h="75%"
        backgroundColor="#FFC587"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          boxShadow: "0 0 10px #FFC587",
          backdropFilter: "blur(5px)",
          position: "relative",
        }}
      >
        <Box style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)" }}>
          <FaShoppingBag size={40} color="black" />
        </Box>
        <Box sx={textStyle} style={{ marginTop: "30px" }}>
          Shopping<br />With<br />Us
        </Box>
      </Box>
    </Box>
  );
};

const SellingBox = () => {
  return (
    <Box
      w="750px"
      h="350px"
      backgroundColor="#FFB76B"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
        margin: "70px", // Add margin to create separation
      }}
    >
      <Box
        w="75%"
        h="75%"
        backgroundColor="#FFC587"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          boxShadow: "0 0 10px #FFC587",
          backdropFilter: "blur(5px)",
          position: "relative",
        }}
      >
        <Box style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)" }}>
          <FaTruck size={40} color="black" />
        </Box>
        <Box sx={textStyle} style={{ marginTop: "30px" }}>
          Selling<br />With<br />Us
        </Box>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          textAlign="center"
          color="black"
          fontSize="70px"
          fontWeight="normal"
          fontFamily="Roboto"
          textDecoration="underline"
        >
          What Do You Need Help With?
        </Text>
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
          <div style={{ display: 'flex' }}>
            <ShoppingBox />
            <SellingBox />
          </div>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
