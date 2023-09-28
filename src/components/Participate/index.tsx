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
import Animation from "../../assets/Animations/43108-business-team.json";
import { ModalDateTimeline } from "../ModalDateTimeline";
import Lottie from "react-lottie";

export function Participate() {
  const defaultOptions = {
    loop: true,

    autoplay: true,

    animationData: Animation,
  };
  return (
    <Box
      w="100%"
      // h="90vh"
      // pt={["10px", "10px", "10px", 0]}
      pb={[90, 90, 90, 100]}
      // bgGradient="linear(to-r, #F4D03F, #16A085)"
      bg="gray.900"
      // boxShadow="inner"
      alignItems={"center"}
      alignContent={"center"}
      display="block"
      justifyContent={"center"}
    >
      <Box w="100vw" pt={20} id="participate" />
      <Box
        alignItems={"center"}
        alignContent={"center"}
        textAlign="center"
        padding="5"
        // boxShadow="xl"
        // background="gray.50"
        // background="#00000049"
        bgGradient="linear(to-r, rgba(0,8,120,1), rgba(95,184,224,1))"
        rounded="md"
        color="gray.50"
        w={["95%", "95%", "95%", "90%"]}
        h={"75%"}
        display={["block", "block", "block", "flex"]}
        backdropFilter="auto"
        backdropBlur="8px"
        margin="auto"
        boxShadow="dark-lg"
      >
        <Stack
          w={["100%", "100%", "100%", "50%"]}
          h={"100%"}
          justifyContent="center"
          alignContent={"center"}
          display="flex"
          spacing={["20"]}
          alignItems={"center"}
        >
          <Heading
            size="lg"
            fontSize="40px"
            mt="5"
            w="100%"
            color="gray.50"
            fontWeight="medium"
          >
            JUNTE SUA EQUIPE
            <Text
              fontSize="md"
              textAlign={"justify"}
              mt={2}
              color="gray.50"
              paddingX={[0, 0, 0, 10]}
              fontWeight="bold"
            >
              No dia 8/10 será liberado 5 assuntos sorteados entre as equipes
              cadastradas, as equipes terão até o dia 25/10 para produzir a
              solução do problema e criar uma apresentação em vídeo ou
              PowerPoint para ser apresentada ao vivo durante o dia 27/10 no
              encerramento do evento.
              <br />
              <br />
              Uma mesa composta por 3 professores (UNIARAXÁ) avaliará e os 3
              primeiros colocados serão premiados de acordo com as colocações.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              mt={10}
              color="white"
            >
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
              >
                Cadastrar Equipe
              </Button>
            </Box>
          </Heading>
        </Stack>

        <Box
          w={["100%", "100%", "100%", "50%"]}
          h={"100%"}
          rounded="md"
          mt={[5, 5, 5, 0]}
          p={[0, 0, 0, 5]}
        >
          {/* <Image
            h={["3", "60%"]}
            w="100%"
            // mt="3.5"
            // ml="3.5"
            src="/images/undraw_project_team_lc5a.svg"
            alt="Logo Zema"
            alignSelf={"center"}
          /> */}
          <Lottie
            options={defaultOptions}
            style={{ width: "80%", cursor: "auto", marginTop: "-30px" }}
          />

          <Flex mt={[0, 0, 0, -10]}>
            {/* <Box w="100%" mr={2} rounded="md" /> */}
            <Flex
              color="white"
              background="#00000049"
              rounded="md"
              paddingY={2}
              paddingX={5}
              w="100%"
              boxShadow="inner"
              justifyContent="space-evenly"
            >
              <Flex justifyContent="left">
                <Text fontWeight="bold" fontSize="30px" mr={1}>
                  1º
                </Text>
                <Text m={"auto"} mb={1}>
                  R$ 500,00
                </Text>
              </Flex>
              <Flex justifyContent="left">
                <Text fontWeight="bold" fontSize="30px" mr={1}>
                  2º
                </Text>
                <Text mt={"auto"} mb={1}>
                  R$ 300,00
                </Text>
              </Flex>
              <Flex justifyContent="left">
                <Text fontWeight="bold" fontSize="30px" mr={1}>
                  3º
                </Text>
                <Text mt={"auto"} mb={1}>
                  R$ 100,00
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
