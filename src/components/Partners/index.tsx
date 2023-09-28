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

export function Partners() {
  return (
    <Box
      w="100%"
      // h="90vh"
      pt={20}
      pb={20}
      boxShadow="inner"
      // bgGradient="linear(to-r, #434343, #000000)"
      bg="black"
      alignItems={"center"}
      alignContent={"center"}
      display="flex"
      justifyContent={"center"}
    >
      <Box w="90vw">
        <Heading
          size="lg"
          fontSize="40px"
          // mt="5"
          w="100%"
          color="gray.50"
          fontWeight="medium"
          textAlign="center"
        >
          PARCEIROS
        </Heading>
        <Flex
          display={["grid", "grid", "grid", "flex"]}
          w="100%"
          alignContent="center"
          justifyContent="center"
        >
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            src="/images/Partners/cbmm.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            ml="3.5"
            src="/images/Partners/ZemaNew.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            ml="3.5"
            src="/images/Partners/cbmm.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            ml="3.5"
            src="/images/Partners/ZemaNew.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            ml="3.5"
            src="/images/Partners/cbmm.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
        </Flex>
        <Flex
          display={["grid", "grid", "grid", "flex"]}
          w="100%"
          alignContent="center"
          justifyContent="center"
        >
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            ml="3.5"
            src="/images/Partners/ZemaNew.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            ml="3.5"
            src="/images/Partners/cbmm.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            ml="3.5"
            src="/images/Partners/ZemaNew.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            ml="3.5"
            src="/images/Partners/cbmm.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
          <Image
            // h={["3", "60%"]}
            h="70px"
            mt="3.5"
            src="/images/Partners/cbmm.png"
            alt="Logo Zema"
            alignSelf={"center"}
          />
        </Flex>
      </Box>
    </Box>
  );
}
