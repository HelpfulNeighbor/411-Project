import { SetStateAction, useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import {
  Box,
  Avatar,
  Wrap,
  Text,
  WrapItem,
  Divider,
  Grid,
  GridItem,
  VStack,
  Button,
} from "@chakra-ui/react";
import api from "../../Api/config";
import { UserGetDto } from "../../Data/Types/UserTypes";
import SavedLocations from "../../Components/SavedLocations/SavedLocations";
import EditAccountInfo from "../../Components/EditAccountInfo/EditAccountInfo";
import ProfileSettings from "../../Components/ProfileSettings/ProfileSettings";

export default function AuthProfilePage() {
  const [data, setData] = useState<UserGetDto | null>(null);
  const [activeSection, setActiveSection] = useState("savedLocations");

  useEffect(() => {
    api
      .get<UserGetDto>("/api/authentication/me")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  const handleButtonClick = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  const getInitials = (firstName: string, lastName: string) => {
    const firstInitial = firstName ? firstName.charAt(0) : "";
    const lastInitial = lastName ? lastName.charAt(0) : "";
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <div>
      <NavBar />
      {data && (
        <>
          <Box pb={10}></Box>
          <br />
          <Grid
            templateAreas={`"nav main"
                          "nav footer"`}
            gridTemplateRows={"698px 1fr 30px"}
            gridTemplateColumns={"250px 1fr"}
            h="720px"
            gap="1"
            pr="5"
            color="blackAlpha.700"
            fontWeight="bold"
          >
            <GridItem pl="0" area={"nav"}>
              <VStack spacing="6px">
                <Wrap>
                  <WrapItem>
                    <Avatar size="xl" name={getInitials(data.firstName, data.lastName)} bg='purple.800' />
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
                  <Button
                    fontSize="18px"
                    textAlign="center"
                    backgroundColor="purple.400"
                    color="white"
                    _hover={{ backgroundColor: "purple.800" }}
                    onClick={() => handleButtonClick("savedLocations")}
                  >
                    Saved Locations
                  </Button>
                </Box>
                <br />
                <Divider />
                <br />
                <Box>
                  <Button
                    fontSize="18px"
                    textAlign="center"
                    backgroundColor="purple.400"
                    color="white"
                    _hover={{ backgroundColor: "purple.800" }}
                    onClick={() => handleButtonClick("editAccountInfo")}
                  >
                    Account Info
                  </Button>
                </Box>
                <br />
                <Divider />
                <br />
                <Box>
                  <Button
                    fontSize="18px"
                    textAlign="center"
                    backgroundColor="purple.400"
                    color="white"
                    _hover={{ backgroundColor: "purple.800" }}
                    onClick={() => handleButtonClick("settings")}
                  >
                    Settings
                  </Button>
                </Box>
                <br />
                <Divider />
              </VStack>
            </GridItem>
            <GridItem pl="10" pr="10" bg="white" area={"main"}>
              {activeSection === "savedLocations" && <SavedLocations />}
              {activeSection === "editAccountInfo" && <EditAccountInfo />}
              {activeSection === "settings" && <ProfileSettings />}
            </GridItem>
            <GridItem pl="5" pr="5" area={"footer"}></GridItem>
          </Grid>
        </>
      )}
    </div>
  );
}
