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

interface ParishFilterProps {
    onFilterChange: (filterName: string, filterValue: boolean) => void;
  }

export default function ParishFilter({ onFilterChange }: ParishFilterProps){
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
                                <Checkbox 
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                Acadia
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Ascension
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Caldwell
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Caddo
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Calcasieu
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    East Baton Rouge
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Iberia
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Jefferson Davis
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Lafayette
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Lafourche
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Lincoln
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Livingston
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Madison
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Morehouse
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Natchitoches
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Orleans
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Ouachita
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Rapides
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    St. Bernard
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    St. Landry
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    St. John the Baptist
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    St. Landry & Acadia
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    St. Mary
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    St. Martin
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    St. Tammany
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Tangipahoa
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Terrebonne
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Vermilion
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Vernon
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Washington
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Webster
                                </Checkbox>
                            </WrapItem>
                            <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("parish", e.target.checked)}
                                > 
                                    Winn
                                </Checkbox>
                            </WrapItem>
                        </Wrap>
                        </PopoverFooter>
                    </PopoverContent>
                </Popover>
                </div>
        </div>
    )
}