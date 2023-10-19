import React from 'react';
import { ChakraProvider, Box, CSSReset, theme, Flex, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex width="100%">
        <YourComponent title="Our Vision" content="Empowering customers with a curated collection of artifacts, blending culture and craftsmanship to enrich lifestyles." />
        <YourComponent title="Our Goals" content="Enrich lives by offering exceptional artifacts, celebrating global heritage and creativity." />
      </Flex>
    </ChakraProvider>
  );
}

function YourComponent({ title, content }) {
  return (
    <Flex direction="column" align="center" marginX="10px">
      <Box
        width="350px"
        height="70px"
        bgGradient="linear(to-b, orange.600, orange.600)"
        rounded="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bg="linear-gradient(186deg, rgba(214, 92, 4, 0.22) 49.07%, rgba(214, 92, 4, 0.00) 94.98%)"
      >
        <Text
          color="#000"
          fontSize="40px"
          fontWeight="bold"
          fontFamily="Roboto"
        >
          {title}
        </Text>
      </Box>
      <Box marginY="10px">
        <Box
          width="675px"
          height="380px"
          backgroundColor="#FFC670"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Box
            width="80%"
            height="80%"
            backgroundColor="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="30"
            boxShadow="inset 0 0 20px rgba(0, 0, 0, 0.5)"
          >
            <Text
              textAlign="center"
              color="#000000"
              opacity="0.9"
              fontSize="34.8px"
              fontFamily="Kanit"
              fontWeight="normal"
            >
              {content}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
