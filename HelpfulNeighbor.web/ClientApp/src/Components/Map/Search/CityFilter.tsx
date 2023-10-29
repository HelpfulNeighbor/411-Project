import { SearchIcon } from "@chakra-ui/icons";
import {
    Button,
    IconButton, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Popover,
    PopoverArrow, 
    PopoverBody, 
    PopoverContent, 
    PopoverHeader,  
    PopoverTrigger, 
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from 'react-icons/io';


export default function CityFilter(){
    const searchFilterStyle: React.CSSProperties = {
        position: 'absolute',
        top: '3%',
        left: '28%',
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
                            City
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Filter by City</PopoverHeader>
                        <PopoverBody>
                            <InputGroup>
                                <Input placeholder='Search' variant='filled'/>
                                <InputRightElement>
                                    <IconButton aria-label='Search database' variant='ghost' icon={<SearchIcon />} />
                                </InputRightElement>
                            </InputGroup>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                </div>
        </div>
    )
}