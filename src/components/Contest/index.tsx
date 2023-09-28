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

export function Contest() {
  const defaultOptions = {
    loop: true,

    autoplay: true,

    animationData: Animation,
  };

  function clickSubscrib() {
    const forms =
      "https://docs.google.com/forms/d/e/1FAIpQLSfaBqGLFQaLYS3aklI_3xkQsJZFuEiPQVnUjdmzCEqeul2jpQ/viewform?usp=sf_link";
    window.location.href = forms;
  }
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
      <Box w="100vw" pt={20} id="contest" />
      <Box
        alignItems={"center"}
        alignContent={"center"}
        textAlign="center"
        padding="5"
        // boxShadow="xl"
        // background="gray.50"
        // background="#00000049"
        bgGradient="linear(to-br, rgba(0,8,120,1), rgba(95,184,224,1))"
        rounded="xl"
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
            CONCURSO
            <br />
            <br />
            <Text
              fontSize="md"
              textAlign={"justify"}
              mt={2}
              color="gray.200"
              paddingX={[0, 0, 0, 10]}
              fontWeight="bold"
            >
              Prepare-se para celebrar em grande estilo! Estamos empolgados em
              anunciar o concurso para escolher o logotipo que marcará o nosso
              evento de 20 anos do curso de SIF, e queremos que todos os alunos
              participem! 🔥
              <br />
              <br />
              Imagine ter sua criatividade em destaque 😯, representando um
              marco tão importante. Agarre esta oportunidade para criar o
              logotipo perfeito que capturará a essência do nosso evento.
              <br />
              <br />
              * No geral, a logo deve ser uma representação nítida e contemporânea que 
              enfatiza a interconexão entre tecnologia, inovação, aprendizado, futuro, 
              trabalho e os 20 anos do curso.
              <br />
              <br />
              Envie suas propostas até o prazo final de{" "}
              <span color="gray.100">20/10/2023</span>, e depois, a emoção
              continua com uma votação aberta a todos os alunos para escolher o
              vencedor. 🏆
              <br />
              <br />
              Prepare-se para deixar a sua marca na história do nosso curso.
              Este é o seu momento de brilhar.⭐ Participe do concurso do
              logotipo agora! 😝
            </Text>
            <br />
            <Text fontSize="md">Prazo final para envio: 20/10/2023 23h59</Text>
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
                onClick={() => clickSubscrib()}
                _hover={{
                  color: "black",
                  borderColor: "black",
                  backgroundColor: "transparent",
                }}
              >
                Cadastrar Logotipo
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
                <Text mt={"auto"}>
                 🏆 O vencedor receberá como prêmio uma camiseta oficial do
                  evento! 😉
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
