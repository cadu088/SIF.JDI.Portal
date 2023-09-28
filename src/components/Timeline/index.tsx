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
  TabPanel,
  TabPanels,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";

import { ModalDateTimeline } from "../ModalDateTimeline";
import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export function Timeline() {
  return (
    <Box
      w="100%"
      // h="90vh"
      pt={["20px", "20px", "20px", 50]}
      pb={[0, 0, 0, 50]}
      // bgGradient="linear(to-r, #434343, #000000)"
      bg="gray.900"
      // boxShadow="inner"
      alignItems={"center"}
      alignContent={"center"}
      display="block"
      justifyContent={"center"}
    >
      <Box w="100vw" pt={20} id="timeline" />
      <MotionBox
        alignItems={"center"}
        alignContent={"center"}
        textAlign="center"
        // padding="5"
        // boxShadow="dark-lg"
        // background="#00000049"
        // bgGradient="linear(to-r, #FFE53B, #FF2525)"
        rounded="xl"
        color="gray.50"
        w={["95%", "95%", "95%", "90%"]}
        h={"75%"}
        display={["block", "block", "block", "flex"]}
        backdropFilter="auto"
        backdropBlur="8px"
        alignSelf="center"
        margin="auto"
      >
        <MotionStack
          variants={itemAnimation}
          w={["100%", "100%", "100%", "50%"]}
          h={"100%"}
          justifyContent="center"
          alignContent={"center"}
          display="flex"
          spacing={["10"]}
          alignItems={"center"}
          mb={[5, 5, 5, 0]}
        >
          <Box
            // bg="red"
            w="150px"
            h="150px"
            borderRadius={100}
            bgImg="url(./images/giphyEarth.gif)"
            bgRepeat={"no-repeat"}
            bgSize={"120%"}
            bgPosition={"center"}
            boxShadow="xl"
          />
          <Heading
            size="lg"
            fontSize="40px"
            mt="5"
            w="100%"
            color="white"
            fontWeight="medium"
          >
            CRONOGRAMA
            <Text fontSize="md" textAlign={"center"} mt={2} color="gray.200">
              20 à 24 de maio de 2024
            </Text>
            <Text fontSize="small" textAlign={"center"} color="gray.200">
              Centro Cultural UNIARAXÁ
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              pt={5}
              color="black"
            >
              <Button
                bg="white"
                borderWidth={2}
                borderColor="white"
                borderRadius={100}
                disabled
                _hover={{
                  color: "white",
                  borderColor: "white",
                  backgroundColor: "transparent",
                }}
              >
                Inscreva-se
              </Button>
            </Box>
          </Heading>

          {/* <Image
            h={["3", "60%"]}
            w="100%"
            // mt="3.5"
            // ml="3.5"
            src="/images/undraw_celebration_re_kc9k.svg"
            alt="Logo Zema"
            bottom={0}
            alignSelf={"center"}
          /> */}
        </MotionStack>

        <Tabs
          w={["100%", "100%", "100%", "50%"]}
          h={"100%"}
          rounded="xl"
          p={[2, 2, 3, 5]}
          // boxShadow="md"
          variant="enclosed"
          borderColor="black"
          bgGradient="linear(to-r, #EBD235, #FF2525)"
          boxShadow="inner"
        >
          <TabList color="black" fontWeight="medium">
            <Tab
              _focusVisible={{ border: "none" }}
              _selected={{ color: "white", bg: "black" }}
              fontSize={["12px", "12px", "16px", "16px"]}
            >
              20/05
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "black" }}
              fontSize={["12px", "12px", "16px", "16px"]}
            >
              21/05
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "black" }}
              fontSize={["12px", "12px", "16px", "16px"]}
            >
              22/05
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "black" }}
              fontSize={["12px", "12px", "16px", "16px"]}
            >
              23/05
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "black" }}
              fontSize={["12px", "12px", "16px", "16px"]}
            >
              24/05
            </Tab>
          </TabList>
          <TabPanels
            background="#0000005B"
            roundedBottomLeft="xl"
            roundedBottomRight="xl"
            boxShadow="xl"
          >
            <TabPanel>
              <ModalDateTimeline />
            </TabPanel>
            <TabPanel>
              <ModalDateTimeline />
            </TabPanel>
            <TabPanel>
              <ModalDateTimeline />
            </TabPanel>
            <TabPanel>
              <ModalDateTimeline />
            </TabPanel>
            <TabPanel>
              <ModalDateTimeline />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MotionBox>
    </Box>
  );
}
