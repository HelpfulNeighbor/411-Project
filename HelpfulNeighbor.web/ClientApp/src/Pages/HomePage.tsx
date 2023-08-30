import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Link as ChakraLink,
  LinkProps,
  Container,
  Text,
  Image,
  Divider,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdPerson, MdLogin, MdAttachMoney, MdSearch } from "react-icons/md";
import NavBar from "../Components/NavBar";

export default function HomePage() {

    

  return (
    <div>
        <NavBar />
      {/* <Flex minWidth="max-content" align-items="center" gap="3" p="20px">
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/">
              Home
            </ChakraLink>
          </Heading>
        </Box>
        <Box p="2">
          <Heading size="md">Search</Heading>
        </Box>
        <Box p="2" display="flex">
          <Icon as={MdPerson} color="purple" boxSize={6} mr="1px" />
          <Heading size="md">Profile</Heading>
        </Box>
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/about">
              About Us
            </ChakraLink>
          </Heading>
        </Box>
        <Box p="2" display="flex">
          <Icon as={MdAttachMoney} color="green" boxSize={6} mr="1px" />
          <Heading size="md">Donate</Heading>
        </Box>
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/feedback">
              Feedback
            </ChakraLink>
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup spacing="3" pr="10px">
          <Button colorScheme="purple" p="20px">
            Sign Up
          </Button>
          <Button rightIcon={<MdLogin />} colorScheme="purple" p="20px">
            Log in
          </Button>
        </ButtonGroup>
      </Flex>

      <Divider /> */}

      <Flex
        minWidth="max-content"
        p="75px"
        justifyContent="center"
        bgColor="#E9D8FD"
      >
        <Text as="b" fontSize="75px">
          Helpful Neighbor
        </Text>
      </Flex>

      <Flex bgColor="#E9D8FD" pb="100px">
        <Box display="flex" flexDirection="column" mt="75px" ml="350px">
          <Text fontSize="3xl" textAlign="center">
            Want to help the <b>homeless?</b>
            <br />
            Search for a nearby community resource.
          </Text>
          <Button
            leftIcon={<MdSearch />}
            colorScheme="purple"
            mt="35px"
            ml="125px"
            width="50%"
          >
            Search Now
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" ml="100px">
          <Image
            boxSize="300px"
            objectFit="cover"
            width="max"
            src="https://media.istockphoto.com/id/1306807452/vector/map-city-vector-illustration.jpg?s=612x612&w=0&k=20&c=8efOIy-Ft3trEzeDk3PY2WRjWws8mvKXgkLqCZ2cP5A="
          />
        </Box>
      </Flex>

      <Flex minWidth="max-content" p="35px" justifyContent="center">
        <Text as="b" color="purple.500" fontSize="40px" textAlign="center">
          Why Helpful Neighbor?
        </Text>
      </Flex>

      <Flex
        justifyContent="center"
        flexDirection="column"
        gap="7"
        alignItems="center"
        pb='70px'
      >
        <Box height="150px" width="50%" bg="#C4F1F9" borderRadius="100px" shadow='xl'>
          <Text fontSize="20px"  fontStyle='italic' textAlign="center" mt="60px">
            Help by introducing the homeless to <b>community resources</b>
          </Text>
        </Box>
        <Box height="150px" width="50%" bg="#90edb3" borderRadius="100px" shadow='xl'>
          <Text fontSize="20px" fontStyle='italic' textAlign="center" mt="60px"> 
            Donate to homeless people in a <b>safe</b> & <b>trusted</b> manner
          </Text>
        </Box>
        <Box height="150px" width="50%" bg="#FEFCBF" borderRadius="100px" shadow='xl'>
          <Text fontSize="20px" fontStyle='italic' textAlign="center" mt="60px">
            Heal your local commnunity <b>one scroll</b> at a time
          </Text>
        </Box>
      </Flex>

      <Flex flexDirection='column' alignItems='center' bgColor="#E9D8FD" p='50px'>
        <Text fontSize='30px' p='50px'>
            Learn more about the creators of Helpful Neighbor!
        </Text>
        <Button as={ReactRouterLink} to='/about' size='lg' colorScheme="purple">
            About Us
        </Button>
      </Flex>
    </div>
  );
}
