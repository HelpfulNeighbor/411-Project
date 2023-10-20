import {
    Checkbox, 
    IconButton, 
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
import { MdFilterAlt } from 'react-icons/md';


export default function SearchFilter(){
    const searchFilterStyle: React.CSSProperties = {
        position: 'absolute',
        top: '3%',
        left: '18%',
    };

    return(
        <div>
            <div style={searchFilterStyle}>
                <Popover>
                    <PopoverTrigger>
                        <IconButton
                        variant='ghost'
                        colorScheme='purple'
                        aria-label={"Filter"} 
                        fontSize='25px'
                        icon={<MdFilterAlt />}                
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Filter Search Criteria</PopoverHeader>
                        <PopoverBody>
                            <Wrap>
                                <WrapItem>
                                    <Checkbox> Affordable Housing</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Charity</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Clothing Donation Center</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Domestic Violence Help</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Food Bank / Distribution Center</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Government Help Organizations</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Group Housing</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Mental Health Treatment Center</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Social Service Organization</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                    <Checkbox> Veteran Organization</Checkbox>
                                </WrapItem>
                                <WrapItem>
                                <Checkbox> Homeless shelter</Checkbox>
                                </WrapItem>
                            </Wrap>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                </div>
        </div>
    )
}