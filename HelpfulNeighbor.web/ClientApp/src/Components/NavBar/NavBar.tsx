import {
  Box,
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
import { useAuth } from "../../Authentication/AuthProvider";
import LogoutModel from "../Logout/LogoutModel";

export default function NavBar() {
  
  const {isLoggedIn} = useAuth();

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
        {isLoggedIn?.() && (
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/app/profile">
              Profile
            </ChakraLink>
          </Heading>
        </Box>
        )}
        <Box p="2">
          <Heading size="md">
            <ChakraLink as={ReactRouterLink} to="/about">
              About Us
            </ChakraLink>
          </Heading>
        </Box> 
        <Spacer />
        <ButtonGroup spacing="3" pr="10px">
          <SignUpModel />
          <LoginModel />
          <LogoutModel />
        </ButtonGroup>
      </Flex>
      <Divider />
    </div>
  );
}
