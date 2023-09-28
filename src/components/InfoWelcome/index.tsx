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

export function InfoWelcome() {
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
      {/* <Box w="100vw" pt={20} id="contest" /> */}
      <Box
        alignItems={"center"}
        alignContent={"center"}
        textAlign="center"
        padding="5"
        // boxShadow="xl"
        // background="gray.50"
        // background="#00000049"
        // bgGradient="linear(to-br, rgba(0,8,120,1), rgba(95,184,224,1))"
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
            fontSize={["20px", "30px", "30px", "30px"]}
            mt="5"
            w="100%"
            color="gray.50"
            fontWeight="bold"
            textAlign="right"
          >
            <Text
              fontSize={["45px", "60px", "60px", "60px"]}
              bgGradient="linear(to-tr, rgba(0,8,120,1), #45a247)"
              bgClip="text"
              fontWeight="extrabold"
            >
              20º ANIVERSÁRIO
            </Text>
            <Text>
              UMA JORNADA INCRÍVEL
              <br /> RUMO AO FUTURO DA <br /> TECNOLOGIA!
            </Text>
          </Heading>
        </Stack>

        <Box
          w={["100%", "100%", "100%", "50%"]}
          h={"100%"}
          rounded="md"
          mt={[5, 5, 5, 0]}
          p={[0, 0, 0, 5]}
          alignContent="left"
          textAlign="left"
        >
          <Text
            fontSize="md"
            textAlign={"justify"}
            mt={2}
            color="gray.50"
            paddingX={[0, 0, 0, 10]}
            fontWeight="bold"
          >
            Em 2024, o curso de Sistemas de Informação do UNIARAXÁ celebrará
            duas décadas de excelência e inovação. Essas duas décadas foram
            marcadas por um profundo aprendizado, deixando uma forte pegada em
            toda a região de Araxá. Nossa missão de capacitar profissionais na área de
            tecnologia, ajudaram a moldar inúmeras empresas locais, contribuindo
            para o fortalecimento da principal área de inovação do mundo.
            <br />
            <br />
            Ao longo desse trajeto, formamos com orgulho mais de 300 talentos, 
            que se tornaram peças fundamentais no panorama
            tecnológico. Essas histórias de sucesso iluminam nosso caminho e
            inspiram nosso compromisso contínuo com a excelência.
            <br />
            <br />
            Nossos professores e alunos, figuras notáveis no cenário de
            tecnologia na região, têm desempenhado papéis cruciais em nossa
            jornada de 20 anos. E agora, é hora de comemorar este marco em
            grande estilo! Preparamos um evento especial que pretende abranger
            toda a região, com o objetivo de gerar ideias e debates sobre o
            futuro do mundo e das empresas no contexto da tecnologia.
            <br />
            <br />
            Junte-se a nós nesta celebração, onde o passado se une ao futuro, e
            onde a inovação e o conhecimento abrem as portas para um mundo
            tecnológico ainda mais brilhante. Este é o nosso legado, e estamos
            prontos para as próximas duas décadas, emocionantes e
            transformadoras. Venha fazer parte da nossa história e moldar o futuro
            conosco!
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
