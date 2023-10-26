import {
    Button,
    Checkbox, 
    Popover,
    PopoverArrow, 
    PopoverBody, 
    PopoverContent, 
    PopoverHeader,  
    PopoverTrigger, 
    Wrap, 
    WrapItem, 
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from 'react-icons/io';

interface ResourceTypeFilterProps {
    onFilterChange: (filterName: string, filterValue: boolean) => void;
}

export default function ResourceTypeFilter({ onFilterChange }: ResourceTypeFilterProps){

    const searchFilterStyle: React.CSSProperties = {
        position: 'absolute',
        top: '3%',
        left: '20%',
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
                            Resource
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Search by Resource</PopoverHeader>
                        <PopoverBody>
                            <Wrap>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                    Affordable Housing
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > Charity
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                        Clothing Donation Center
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                        Domestic Violence Help
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                        Food Bank / Distribution Center
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                        Government Help Organizations
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                        Group Housing
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                        Mental Health Treatment Center
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                        Social Service Organization
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox
                                    onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                    > 
                                        Veteran Organization
                                    </Checkbox>
                                </WrapItem>
                                <WrapItem>
                                <Checkbox
                                onChange={(e) => onFilterChange("resourceType", e.target.checked)}
                                > 
                                    Homeless shelter
                                </Checkbox>
                                </WrapItem>
                            </Wrap>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                </div>
        </div>
    )
}