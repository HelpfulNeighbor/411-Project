import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import InfoCard from './InfoCard';

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
                <InfoCard/>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
    )
}