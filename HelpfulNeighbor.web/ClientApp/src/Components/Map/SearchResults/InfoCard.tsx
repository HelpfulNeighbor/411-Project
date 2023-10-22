import { Accordion, 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel, 
    Box, 
    Card, 
    CardBody, 
    CardHeader, 
    Heading, 
    IconButton, 
    Stack, 
    StackDivider, 
    Text, 
    VStack, 

} from "@chakra-ui/react";
import React from "react";
import { GoBookmark } from "react-icons/go";

export default function InfoCard(){
    let name;
    let distance;
    let resourceType;
    let address;
    let dayOfWeek;
    let openTime;
    let closeTime;
    let website;
    let phoneNumber;

    const infoCardStyle: React.CSSProperties = {
        width: '100%',
        position: 'relative'
    };

    return(
        <div style={infoCardStyle}>
            <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            >
                <Card>
                <CardHeader>
                    <Heading size='sm'>Name: </Heading>
                    <Heading size='sm'>{name}</Heading>
                </CardHeader>
                    <CardBody>
                        <Text>Distance: </Text>
                        <Text>{distance}</Text>
                        <br/>
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    View More
                                    </Box>
                                    <AccordionIcon />
                                    <IconButton icon={<GoBookmark/>} variant='ghost' size='lg' colorScheme="purple"  aria-label={"Bookmark Resource"}/>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Resource Type: {resourceType}
                                <br/>
                                Address: {address}
                                <br/>
                                Hours of Operation:
                                <br/>
                                <Stack direction={['column', 'row']} spacing='12px'>
                                    <Box>
                                        <Text>
                                            {dayOfWeek}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text>
                                            {openTime} - {closeTime}
                                        </Text>
                                    </Box>
                                    
                                </Stack>

                                <br/>
                                Website: {website}
                                <br/>
                                Phone Number: {phoneNumber}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>    
                        
                    </CardBody>
                </Card>
            </VStack>
        </div>
    )
} 