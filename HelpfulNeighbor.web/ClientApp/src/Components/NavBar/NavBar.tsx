import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/react";

import LoginModel from "../Login/LoginModel";
import SignUpModel from "../SignUp/SignUpModel";
import { Link as ReactRouterLink } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";

export default function NavBar() {
  

  return (
    <div>
      <Flex minWidth="max-content" align-items="center" gap="3" p="20px">
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/">
              Home
            </ChakraLink>
          </Heading>
        </Box>
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/search">
              Search
            </ChakraLink>
          </Heading>
        </Box>
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/profile">
              Profile
            </ChakraLink>
          </Heading>
        </Box>
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/about">
              About Us
            </ChakraLink>
          </Heading>
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
        <Button rightIcon={<MdAttachMoney />} colorScheme="yellow" p="20px">
            Donate
          </Button>
          <SignUpModel />
          <LoginModel />
        </ButtonGroup>
      </Flex>
      <Divider />
    </div>
  );
}
