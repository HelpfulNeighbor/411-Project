import {Flex, Heading, Grid, GridItem, VStack, IconButton} from "@chakra-ui/react";
import NavBar from "../Components/NavBar/NavBar";
import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GoBookmark } from 'react-icons/go'
import MapDrawer from "../Components/Drawer/MapDrawer";
import MapView from "../Components/Map/MapView";
// import { Link as ReactRouterLink } from "react-router-dom";
  
export default function SearchPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () =>{
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <NavBar />
      <Flex
        minWidth="max-content"
        p="30px"
        justifyContent="center"
        bgColor="#E9D8FD"
      >
        <Heading as="b" fontSize="25px">
          Search for Community Resources
        </Heading> 
      </Flex>
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateRows={'720px 1fr 30px'}
        gridTemplateColumns={'75px 1fr'}
        h='720px'
        gap='0'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='0' area={'nav'}>
          <VStack spacing='6px'>
            <br/>
            <IconButton variant='ghost'size='lg' colorScheme="purple" icon={<HamburgerIcon />} aria-label={"Search Results"} onClick={openDrawer}/>
            <br/>
            <IconButton icon={<GoBookmark/>} variant='ghost' size='lg' colorScheme="purple"  aria-label={"Bookmark Resource"}/>
          </VStack>
        </GridItem>
        <GridItem pl='0' area={'main'}>
          <Flex
          minWidth="max-content"
          p="400px"
          justifyContent="center"
          //backgroundImage="url('https://st4.depositphotos.com/12201730/21347/i/950/depositphotos_213472932-stock-photo-illustration-map-city-atlanta-usa.jpg')"
        > 
          <MapView/>
        </Flex>
        </GridItem>
      </Grid>
      <MapDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

    </div>
  );
}
  