import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
  Checkbox,
} from "@chakra-ui/react";

const MyAccordion = ({ title, children }) => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text fontSize="xl">{title}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </>
  );
};

const Products = () => {
  return (
    <div className=" container mx-28">
      <Flex className="latofont">
        <Box w="20%" bg="">
          <Stack spacing={4}>
            <Text fontSize="4xl">Filters</Text>
            <Accordion defaultIndex={[0]} allowMultiple>
              <MyAccordion title="Musical Instruments">
                <Stack spacing={3}>
                  <Text fontSize="lg">Item 1</Text>
                  <Text fontSize="lg">Item 2</Text>
                  <Text fontSize="lg">Item 3</Text>
                  <Text fontSize="lg">Item 4</Text>
                  <Text fontSize="lg">Item 5</Text>
                  <Text fontSize="lg">Item 6</Text>
                  <Text fontSize="lg">Item 7</Text>
                </Stack>
              </MyAccordion>
              <MyAccordion title=" String Instruments">
                <Stack spacing={3}>
                  <Text fontSize="lg">Violins</Text>
                  <Text fontSize="lg">Ukelele</Text>
                  <Text fontSize="lg">Double Base</Text>
                  <Text fontSize="lg">Banjo</Text>
                  <Text fontSize="lg">Harp </Text>
                  <Text fontSize="lg">Item </Text>
                  <Text fontSize="lg">Item </Text>
                </Stack>
              </MyAccordion>
            </Accordion>
            <Text fontSize="4xl">Price</Text>
            <RangeSlider
              aria-label={["min", "max"]}
              colorScheme="blue"
              defaultValue={[120, 240]}
              min={0}
              max={300}
              step={30}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Flex align="center">
              <Select mr={2} placeholder="Min">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Text fontSize="lg">to</Text>
              <Select ml={2} placeholder="Max   ">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
            <Accordion defaultIndex={[0]} allowMultiple>
              <MyAccordion title={<Text fontSize="4xl">Offers</Text>}>
                <Stack spacing={3}>
                  <Checkbox>Special Pricex</Checkbox>
                  <Checkbox>Buy more save more</Checkbox>
                </Stack>
              </MyAccordion>

              <MyAccordion title={<Text fontSize="4xl">Discount</Text>}>
                <Stack spacing={3}>
                  <Checkbox>40% or more</Checkbox>
                  <Checkbox>30% or more</Checkbox>
                  <Checkbox>20% or more</Checkbox>
                  <Checkbox>10% or more</Checkbox>
                </Stack>
              </MyAccordion>
            </Accordion>
          </Stack>
        </Box>
        <Box w="80%">{/* Main content */}</Box>
      </Flex>
    </div>
  );
};

export default Products;
