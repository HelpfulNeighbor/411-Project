import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
    Heading,
  } from '@chakra-ui/react'

  interface MapDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MapDrawer({ isOpen, onClose } : MapDrawerProps){
    //const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader textAlign="center">Search Results</DrawerHeader>
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
            </DrawerContent>
          </Drawer>
        </>
    )
}