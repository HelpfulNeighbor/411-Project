import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  Wrap,
  Text,
  WrapItem,
  Divider,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import api from "../../Api/config";
import { UserGetDto } from "../../Data/Types/UserTypes";

export default function AuthProfilePage() {
  const [data, setData] = useState<UserGetDto | null>(null);

  useEffect(() => {
    api
      .get<UserGetDto>("/api/authentication/me")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <NavBar />
      {data && (
        <>
          <Flex
            minWidth="max-content"
            p="30px"
            justifyContent="center"
            bgColor="#E9D8FD"
          >
            <Heading as="b" fontSize="30px">
              Hi, {data.firstName}!
            </Heading>
          </Flex>
          <br />
          <br />
          <Grid
            templateAreas={`"nav main"
                                    "nav footer"`}
            gridTemplateRows={"698px 1fr 30px"}
            gridTemplateColumns={"250px 1fr"}
            h="720px"
            gap="1"
            color="blackAlpha.700"
            fontWeight="bold"
          >
            <GridItem pl="0" area={"nav"}>
              <VStack spacing="6px">
                <Wrap>
                  <WrapItem>
                    <Avatar size="xl" name={data.username} />
                  </WrapItem>
                </Wrap>
                <br />
                <Text as="b" fontSize="20px" textAlign="center">
                  {data.firstName} {data.lastName}
                </Text>
                <br />
                <Divider />
                <br />
                <Box>
                  <Text fontSize="18px" textAlign="center">
                    Saved Locations
                  </Text>
                </Box>
                <br />
                <Divider />
                <br />
                <Box>
                  <Text fontSize="18px" textAlign="center">
                    Donations
                  </Text>
                </Box>
                <br />
                <Divider />
                <br />
                <Box>
                  <Text fontSize="18px" textAlign="center">
                    Notifications
                  </Text>
                </Box>
                <br />
                <Divider />
                <br />
                <Box>
                  <Text fontSize="18px" textAlign="center">
                    Edit Account Info
                  </Text>
                </Box>
                <br />
                <Divider />
                <br />
                <Box>
                  <Text fontSize="18px" textAlign="center">
                    Settings
                  </Text>
                </Box>
                <br />
                <Divider />
              </VStack>
            </GridItem>
            <GridItem pl="5" bg="#f3f5f7" area={"main"}></GridItem>
            <GridItem pl="5" area={"footer"}></GridItem>
          </Grid>
        </>
      )}
    </div>
  );
}
