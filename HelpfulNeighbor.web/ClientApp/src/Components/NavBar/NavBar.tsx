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
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthProvider";
import LogoutModel from "../Logout/LogoutModel";

export default function NavBar() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="3" p="20px">
        {[
          { path: "/", label: "Home" },
          { path: "/search", label: "Search" },
          { path: "/about", label: "About Us" },
        ].map(({ path, label }) => (
          <Box p="2" key={path}>
            <Heading
              size="md"
              color={isActiveLink(path) ? "purple.600" : "gray.500"}
            >
              <ChakraLink as={ReactRouterLink} to={path}>
                {label}
              </ChakraLink>
            </Heading>
          </Box>
        ))}
        {isLoggedIn?.() && (
          <Box p="2">
            <Heading
              size="md"
              color={isActiveLink("/app/profile") ? "purple.600" : "gray.500"}
            >
              <ChakraLink as={ReactRouterLink} to="/app/profile">
                Profile
              </ChakraLink>
            </Heading>
          </Box>
        )}
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

