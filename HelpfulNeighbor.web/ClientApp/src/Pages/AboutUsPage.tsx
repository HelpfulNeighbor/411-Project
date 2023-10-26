import {
  Box,
  Button,
  ButtonGroup,
  Image,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MdPhone } from "react-icons/md";
import NavBar from "../Components/NavBar/NavBar";

export default function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <Flex>
        <Box
          display="flex"
          bg="#E9D8FD"
          w="100%"
          h="200px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="b" fontSize="60px">
            ABOUT US
          </Heading>
        </Box>
      </Flex>

      <Box
        display="flex"
        flexDirection="column"
        ml="10px"
        boxShadow="2xl"
        borderRadius='30px'
        w="40%"
        p="20px"
        bgColor="white"
        position="relative"
        top="-26px"
        left='60px'
      >
        <Heading color="purple" mb="10px">
          WHO WE ARE
        </Heading>
        <Text mb="20px">
          Meet the visionary trio behind a transformative mission to combat
          homelessness in Louisiana.
          Our team, composed of three dedicated and compassionate female software
          developers, has come together to develop a groundbreaking application with 
          a singular goal: to alleviate homelessness and build a brighter future for
          those in need. Our team consists of Autumn Kennedy (left), Payton Laskie (middle),
          and Kaitlyn Hayes (right). Guided by a deep sense of empathy and unwavering
          dedication to our neighbors, we have worked tirelessly to design an application
          that connects individuals experiencing homelessness to vital resources like shelters,
          food banks, mental health and substance abuse treatment centers, and more. 
          By leveraging the power of technology, we aim to bridge the gap between those in 
          need and the assistance available to them. 
        </Text>
      </Box>

      <Image
        boxSize="500px"
        objectFit="fill"
        src="/GroupPicture.jpg"
        top="365px"
        left="1000px"
        shadow="2xl"
        height="530px"
        width="730px"
        position="absolute"
        borderRadius='30px'
      />
      

      <Box
        display="flex"
        flexDirection="column"
        ml="10px"
        boxShadow="2xl"
        borderRadius='30px'
        w="40%"
        p="25px"
        bgColor="white"
        position="relative"
        top="28px"
        left='60px'
      >
        <Heading color="purple" mb="10px">
          WHY WE STARTED
        </Heading>
        <Text mb="20px">
          The journey of Helpful Neighbor began in late Fall of 2022. Our team was eager
          to put our knowledge and technical skills to use. As three passionate women who 
          are committed to giving back to their community and advocating for social change,
          an idea was formed: how can we use our skills to help those in need? Fuelled by empathy
          and an unshakable belief in the potential for technology to transform lives,
          our team decided to begin developing an application geared towards mitigating
          homelessness in Louisiana.
          Our goal was clear: we need to do our duty as educated individuals and help 
          our community. Through tireless dedication and a collective devotion to our 
          mission, Helpful Neighbor was born. 
        </Text>

        <ButtonGroup spacing="3" ml="40%">
          {/* <Button rightIcon={<MdAttachMoney />} colorScheme="yellow" p="20px">
            Donate
          </Button> */}
          <Button rightIcon={<MdPhone />} colorScheme="purple" p="20px">
            Contact Us
          </Button>
        </ButtonGroup>
      </Box>

      <Box bg="#E9D8FD" w="100%" h="150px" />

    </div>
  );
}
