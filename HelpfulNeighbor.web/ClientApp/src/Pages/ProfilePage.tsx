import NavBar from "../Components/NavBar/NavBar";
import { Flex, Box, Heading, Avatar, Wrap, Text, WrapItem, Divider, Grid, GridItem, VStack } from "@chakra-ui/react";

export default function ProfilePage () {
    return(
        <div>
            <NavBar />
            <Flex
                minWidth="max-content"
                p="30px"
                justifyContent="center"
                bgColor="#E9D8FD"
            >
                <Heading as="b" fontSize="30px">
                Please Sign in to View Profile.
                </Heading>
            </Flex>
            <br/>
            <br/>
            <Grid
                templateAreas={`"nav main"
                                "nav footer"`}
                gridTemplateRows={'698px 1fr 30px'}
                gridTemplateColumns={'250px 1fr'}
                h='720px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
                >
                <GridItem pl='0' area={'nav'}>
                    <VStack spacing='6px'>
                        <Wrap>
                            <WrapItem>
                                <Avatar size='xl'/>
                            </WrapItem>
                        </Wrap>
                        <br/>
                        <Text as='b' fontSize="20px" textAlign="center">
                            N/A
                        </Text>
                        <br/>
                        <Divider />
                        <br/>
                        <Box>
                            <Text fontSize="18px" textAlign="center">
                                Saved Locations
                            </Text>
                        </Box>
                        <br/>
                        <Divider />
                        <br/>
                        <Box>
                            <Text fontSize="18px" textAlign="center">
                                Donations
                            </Text>
                        </Box>
                        <br/>
                        <Divider />
                        <br/>
                        <Box>
                            <Text fontSize="18px" textAlign="center">
                                Notifications
                            </Text>
                        </Box>
                        <br/>
                        <Divider />
                        <br/>
                        <Box>
                            <Text fontSize="18px" textAlign="center">
                                Edit Account Info
                            </Text>
                        </Box>
                        <br/>
                        <Divider />
                        <br/>
                        <Box>
                            <Text fontSize="18px" textAlign="center">
                                Settings
                            </Text>
                        </Box>
                        <br/>
                        <Divider />
                    </VStack>
                </GridItem>
                <GridItem pl='5' bg="#f3f5f7" area={'main'}>
                    
                </GridItem>
                <GridItem pl='5' area={'footer'}>
                   
                </GridItem>
                </Grid>
        </div>
    )
}