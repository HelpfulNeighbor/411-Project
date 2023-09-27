import {
    Flex,
    Heading,
    Box,
    useDisclosure,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerHeader,
    DrawerCloseButton,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    IconButton,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  
  } from "@chakra-ui/react";
  import NavBar from "../Components/NavBar";
  import React from "react";
  import { AttachmentIcon, HamburgerIcon } from "@chakra-ui/icons";
  import { Link as ReactRouterLink } from "react-router-dom";
  // import Map from 'react-map-gl';
  
  export default function SearchPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const btnRef = React.useRef();
  
    return (
      <div>
        <NavBar />
  
        <Flex
          minWidth="max-content"
          p="30px"
          justifyContent="center"
          bgColor="#E9D8FD"
  
        >
            <VStack
            spacing="20px"
            >
            
          <Box
          display="flex"
          >
          <Heading as="b" fontSize="20px">
            Search for Community Resources
          </Heading>
          </Box>

          <Box
            alignContent="left"
          >
        <IconButton colorScheme="purple" icon={<HamburgerIcon />} onClick={onOpen} aria-label={"Bookmarked Locations"}>
          </IconButton>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader textAlign="center">Your Bookmarked Resources</DrawerHeader>
              <DrawerBody>
                  <Accordion allowToggle>
                      <AccordionItem>
                          <h2>
                              <AccordionButton>
                                  <Box as="span" flex="1" textAlign="center">
                                      Resource Name 1
                                  </Box>
                                  <AccordionIcon />
                              </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                          <Heading as='h1' size='sm'>Address:</Heading>
                            <p>1234 Streetname St,</p> 
                            <p>Baton Rouge, LA 12345</p>
                            <Heading as='h1' size='sm'>Hours of Operation:</Heading>
                            <p>M-F 8:00a-5:00p</p>
                            <Heading as='h1' size='sm'>Website:</Heading>
                            <p>www.url.com</p>
                          </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <h2>
                              <AccordionButton>
                                  <Box as="span" flex="1" textAlign="center">
                                      Resource Name 2
                                  </Box>
                                  <AccordionIcon />
                              </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                          <Heading as='h1' size='sm'>Address:</Heading>
                            <p>1234 Streetname St,</p> 
                            <p>Baton Rouge, LA 12345</p>
                            <Heading as='h1' size='sm'>Hours of Operation:</Heading>
                            <p>M-F 8:00a-5:00p</p>
                            <Heading as='h1' size='sm'>Website:</Heading>
                            <p>www.url.com</p>
                          </AccordionPanel>
                      </AccordionItem>
                  </Accordion>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
  
          </Box>
          </VStack>
        </Flex>
  
        <Flex
          minWidth="max-content"
          p="235px"
          justifyContent="center"
          
          backgroundImage="url('https://st4.depositphotos.com/12201730/21347/i/950/depositphotos_213472932-stock-photo-illustration-map-city-atlanta-usa.jpg')"
        > 
            {/* <Map
                mapboxAccessToken="<Mapbox access token>"
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{width: 600, height: 400}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            /> */}
        </Flex>
  
      </div>
    );
  }
  