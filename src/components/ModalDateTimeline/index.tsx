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
  Avatar,
  Center,
} from "@chakra-ui/react";
import { BsCalendarEvent, BsClock } from "react-icons/bs";

export function ModalDateTimeline() {
  return (
    <Box w={"100%"} h={"100%"}>
      <Center mt="200" mb="200">
        Em breve!
      </Center>
    </Box>
    // <Box w={"100%"} h={"100%"}>
    //   <Heading
    //     size="lg"
    //     fontSize="50px"
    //     mt={5}
    //     w="100%"
    //     textAlign={"center"}
    //     fontWeight="bold"
    //     alignSelf="center"
    //     // ml={5}
    //     color="black"
    //   >
    //     Blockchain
    //     <Text fontSize="large" textAlign={"center"} color="gray.800">
    //       Como o mercado está utilizando?
    //     </Text>
    //   </Heading>

    //   <Box display="flex" alignContent="center" justifyContent="center" mt={5}>
    //     <Avatar
    //       size="xl"
    //       name="Dan Abrahmov"
    //       src="https://bit.ly/dan-abramov"
    //     />
    //     <Heading
    //       size="lg"
    //       fontSize="30px"
    //       mt="5"
    //       w="100%"
    //       textAlign={"left"}
    //       fontWeight="bold"
    //       alignSelf="center"
    //       ml={5}
    //     >
    //       Dan Abrahmov
    //       <Text fontSize="md" textAlign={"left"} color="gray.900">
    //         CEO Umbrela
    //       </Text>
    //     </Heading>
    //   </Box>

    //   <Text fontSize="14px" textAlign={"justify"} mt={5}>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
    //     ex ac velit hendrerit accumsan id eu libero. Mauris mollis orci a
    //     maximus molestie. Phasellus tellus magna, rhoncus eget augue id, rutrum
    //     sagittis ligula. Praesent sed ipsum eget nisi finibus ultricies in vitae
    //     ligula. Praesent suscipit malesuada tristique. Nulla faucibus dignissim
    //     urna et dapibus. Ut vitae massa lacinia, efficitur felis nec, venenatis
    //     risus. Nam luctus justo non tempor feugiat. Integer consequat imperdiet
    //     elit eu suscipit. Mauris ultrices nibh et odio posuere varius. Curabitur
    //     sed finibus tellus. Ut sed efficitur nisi.
    //   </Text>

    //   <Heading
    //     size="lg"
    //     fontSize="30px"
    //     mt="10"
    //     w="100%"
    //     textAlign={"left"}
    //     fontWeight="bold"
    //   >
    //     <Box>
    //       <Text fontSize="md" textAlign={"left"} color="gray.50" display="flex">
    //         <BsCalendarEvent style={{ marginRight: 10 }} /> Segunda-feira, 23 de
    //         outubro de 2023.
    //       </Text>
    //       <Text fontSize="md" textAlign={"left"} color="gray.50" display="flex">
    //         <BsClock style={{ marginRight: 10 }} /> 19h às 20:10
    //       </Text>
    //     </Box>
    //   </Heading>
    // </Box>
  );
}
