import { SearchIcon } from "@chakra-ui/icons";
import {
    Button,
    Checkbox, 
    IconButton, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Popover,
    PopoverArrow, 
    PopoverBody, 
    PopoverContent, 
    PopoverFooter, 
    PopoverHeader,  
    PopoverTrigger, 
    Wrap, 
    WrapItem, 
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from 'react-icons/io';


export default function ParishFilter(){
    const searchFilterStyle: React.CSSProperties = {
        position: 'absolute',
        top: '3%',
        left: '34%',
    };

    return(
        <div>
            <div style={searchFilterStyle}>
                <Popover>
                    <PopoverTrigger>
                        <Button
                        rightIcon={<IoIosArrowDown/>}
                        colorScheme='purple'
                        borderRadius='xl'
                        >
                            Parish
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Search by Parish</PopoverHeader>
                        <PopoverBody>
                                    <InputGroup>
                                        <Input placeholder='Search' variant='filled'/>
                                        <InputRightElement>
                                            <IconButton aria-label='Search database' variant='ghost' icon={<SearchIcon />} />
                                        </InputRightElement>
                                    </InputGroup>
                        </PopoverBody>
                        <PopoverFooter>
                        <Wrap>
                            <WrapItem>
                                <Checkbox> Acadia</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Ascension</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Caldwell</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Caddo</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Calcasieu</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> East Baton Rouge</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Iberia</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Jefferson Davis</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Lafayette</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Lafourche</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Lincoln</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Livingston</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Madison</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Morehouse</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Natchitoches</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Orleans</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Ouachita</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Rapides</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> St. Bernard</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> St. Landry</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> St. John the Baptist</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> St. Landry & Acadia</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> St. Mary</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> St. Martin</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> St. Tammany</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Tangipahoa</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Terrebonne</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Vermilion</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Vernon</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Washington</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Webster</Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox> Winn</Checkbox>
                            </WrapItem>
                        </Wrap>
                        </PopoverFooter>
                    </PopoverContent>
                </Popover>
                </div>
        </div>
    )
}