import {
  Alert,
  Heading,
  Box,
  Flex,
  Image,
  Stack,
  Button,
  Text,
  ButtonGroup,
  AbsoluteCenter,
  Divider,
} from "@chakra-ui/react";

import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";

export function Welcome() {
  return (
    <MotionBox
      w="100%"
      // h="90vh"
      pt={[90, 90, 90, 120]}
      pb={[90, 90, 90, 100]}
      // bgGradient="linear(to-r, #283c86, #45a247)"
      // bgImg="url(./images/giphyData.gif)"
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      bg="gray.900"
      boxShadow="inner"
      alignItems={"center"}
      alignContent={"center"}
      display="flex"
      justifyContent={"center"}
      variants={animationContainer}
      initial="hidden"
      animate="visible"
    >
      <Box
        alignItems={"center"}
        alignContent={"center"}
        textAlign="center"
        padding="5"
        // bg="gray.50"
        // boxShadow="dark-lg"
        // background="#00000049"
        // background="black"
        // bgGradient="linear(to-r, #0093E9, #80D0C7)"
        // bgImg="url(./images/giphyData.gif)"
        // bgRepeat={"no-repeat"}
        // bgSize={"100%"}
        // bgPosition={"center"}
        rounded="xl"
        color="gray.50"
        w={["95%", "95%", "95%", "90%"]}
        h={"75%"}
        display={["block", "block", "block", "flex"]}
        backdropFilter="auto"
        backdropBlur="10px"
        bgGradient="linear(to-tr, rgba(0,8,120,1), #45a247)"
        //bgGradient="linear(to-r, rgba(0,8,120,1), rgba(95,184,224,1))"
      >
        <MotionStack
          w={["100%", "100%", "100%", "100%"]}
          h={"100%"}
          mb="10"
          mt="10"
          justifyContent="center"
          display="flex"
          spacing={["4"]}
          variants={itemAnimation}
        >
          <Text
            fontSize="60px"
            fontWeight="bold"
            textAlign={"center"}
            mb={5}
            color="gray.50"
          >
            Jornada da Informática
          </Text>

          <Heading
            size="lg"
            fontSize="40px"
            mt="5"
            w="100%"
            color="gray.100"
            fontWeight="medium"
            textAlign={"center"}
          >
            20º Aniversário <br /> Sistemas de Informação
            <Text fontSize="md" textAlign={"center"} mt={3} color="gray.300">
              20 à 24 de maio de 2024
            </Text>
            <Text fontSize="small" textAlign={"center"} color="gray.300">
              Centro Cultural UNIARAXÁ
            </Text>
          </Heading>
        </MotionStack>
        {/* <MotionBox
          w={["100%", "100%", "100%", "50%"]}
          h={"100%"}
          background="#0000005B"
          // background="black"
          rounded="md"
          p={5}
          mt="10"
          mb="10"
          boxShadow="dark-lg"
          backdropFilter="auto"
          backdropBlur="10px"
          variants={itemAnimation}
        >
          <Heading
            size="lg"
            fontSize="30px"
            mt="5"
            w="100%"
            textAlign={"left"}
            fontWeight="bold"
          >
            O MAIOR EVENTO TECH DA REGIÃO EM 2023
          </Heading>
          <Text fontSize="14px" textAlign={"justify"} mt={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et ex ac velit hendrerit accumsan id eu libero. Mauris mollis orci a
            maximus molestie. Phasellus tellus magna, rhoncus eget augue id,
            rutrum sagittis ligula. Praesent sed ipsum eget nisi finibus
            ultricies in vitae ligula. Quisque id mi non tortor pharetra
            bibendum. Ut feugiat mauris eget varius porttitor. Vivamus non
            cursus tellus, id porta arcu. Aliquam et leo id ante auctor
            pellentesque in ac enim. Phasellus commodo mauris ac consequat
            fermentum.
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            pt={12}
            mb={2}
          >
            <ButtonGroup gap="4">
              <Button
                bg="black"
                borderWidth={2}
                borderColor="black"
                borderRadius={100}
                _hover={{
                  color: "black",
                  borderColor: "black",
                  backgroundColor: "transparent",
                }}
                as="a"
                href="#timeline"
              >
                Cronograma
              </Button>
              <Button
                // colorScheme="blackAlpha"
                borderColor="white"
                color="white"
                _hover={{
                  color: "black",
                  borderColor: "black",
                  backgroundColor: "white",
                }}
                borderRadius={100}
                variant="outline"
              >
                Inscreva-se
              </Button>
            </ButtonGroup>
          </Box>
        </MotionBox> */}
      </Box>
    </MotionBox>
  );
}
