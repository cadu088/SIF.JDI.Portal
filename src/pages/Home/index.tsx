import {
  Box,
  Flex,
  Progress,
  Spinner,
  Stack,
  Text,
  useToast,
  Heading,
  Image,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import history from "../../routes/history";

import authenticateApi from "../../services/authenticate";
import api from "../../services/api";
import { Header } from "../../components/Header";
import { Welcome } from "../../components/Welcome";
import { Timeline } from "../../components/Timeline";
import { Participate } from "../../components/Participate";
import { Contest } from "../../components/Contest";
import { InfoWelcome } from "../../components/InfoWelcome";

import { Baseboard } from "../../components/Baseboard";
import { Partners } from "../../components/Partners";

import austr from "../../../public/images/146073-astronaut-landing-on-the-moon.json";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";

const Home: React.FC = () => {
  const [typeEsign, setTypeEsign] = useState<"Loja" | "Casa">();
  const [progressStatus, setProgressStatus] = useState(20);
  const toast = useToast();
  const [spinner, setSpinner] = useState(false);
  const [remoto, setRemoto] = useState(false);
  const [error, setError] = useState<undefined | string>(undefined);
  const [geolocation, setGeolocation] = useState(false);

  return (
    <Box justifyContent="center" w="100vw" h="100vh" bg="gray.900">
      <Header />
      <Welcome />
      <InfoWelcome />
      <Timeline />
      <Contest />
      {/* <Partners />
      <Baseboard /> */}
    </Box>
  );
};

export default Home;
