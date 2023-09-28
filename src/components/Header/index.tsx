import { Alert, AlertIcon, Box, Flex, Image, HStack } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w={["100vw"]}
      // h="6vh"
      bg="gray.900"
      alignContent="center"
      justifyContent="center"
      // borderBottomLeftRadius={[0, 100]}
      // borderBottomRightRadius={[0, 100]}
      alignSelf="center"
      margin="auto"
      position="fixed"
      zIndex="999"
      top={0}
      boxShadow="md"
      paddingX={5}
      paddingY={3}
    >
      <HStack
        as="header"
        min-h={"60%"}
        // w={"90%"}
        //bg="blue"
        alignSelf="center"
        alignContent="space-between"
        alignItems="center"
        spacing={["4", "6"]}
        fontWeight="light"
        fontSize="smaller"
        color="gray.100"
      >
        <Box>
          <Image
            h={["7"]}
            // mt="3.5"
            // ml={["250", "250", "250", "0"]}
            mr={["-250", "0", "0", "0"]}
            visibility={["hidden", "visible", "visible", "visible"]}
            src="https://novo.uniaraxa.edu.br/wp-content/themes/intentionally-blank/assets/images/faviconICON.png"
            alt="Logo Zema"
          />
        </Box>
        <Box
          as="a"
          href="#timeline"
          // visibility={["hidden", "hidden", "hidden", "visible"]}
        >
          Cronograma
        </Box>
        <Box
        // visibility={["hidden", "hidden", "hidden", "visible"]}
        >
          Inscreva-se
        </Box>
        <Box
        // visibility={["hidden", "hidden", "hidden", "visible"]}
        >
          Presença
        </Box>
        <Box
          as="a"
          href="#contest"
          // visibility={["hidden", "hidden", "hidden", "visible"]}
        >
          Concurso
        </Box>
      </HStack>
    </Flex>
  );
}
