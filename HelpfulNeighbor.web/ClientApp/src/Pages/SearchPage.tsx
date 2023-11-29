import {Flex, Heading, Grid, GridItem, VStack, IconButton} from "@chakra-ui/react";
import NavBar from "../Components/NavBar/NavBar";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MapDrawer from "../Components/Map/SearchResults/MapDrawer";
import MapWithSearch from "../Components/Map/MapWithSearch";
import { SearchResults } from "../Data/Queries/ResourceQueries";
  
export default function SearchPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResults>({ resources: [] });

  const openDrawer = () =>{
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div style={{ height: '100%' }}>
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
        h='100%'
        gap='0'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='0' area={'nav'}>
          <VStack spacing='6px'>
            <br/>
            <IconButton variant='ghost'size='lg' colorScheme="purple" icon={<HamburgerIcon />} aria-label={"Search Results"} onClick={openDrawer}/>
          </VStack>
        </GridItem>
        <GridItem pl='0' area={'main'} style={{ height: '100%' }}>
          <Flex
          minWidth="max-content"
          p="0px"
          justifyContent="center"
          style={{ height: '100%' }}
        > 
          <MapWithSearch setSearchResults={setSearchResults}/>
        </Flex>
        </GridItem>
      </Grid>
        <MapDrawer isOpen={isDrawerOpen} onClose={closeDrawer} searchResults={searchResults} />
    </div>
  );
}