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

interface InfoCardProps {
    Name: string;
    ResourceType: string;
    Address: string;
    DayOfWeek: string;
    OpenTime: string;
    CloseTime: string;
    Website: string;
    PhoneNumber: string;
  }

export default function InfoCard(props: InfoCardProps){
    let distance;

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
                    <Heading size='sm'>{props.Name}</Heading>
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
                                Resource Type: {props.ResourceType}
                                <br/>
                                Address: {props?.Address || ''}
                                <br/>
                                Hours of Operation:
                                <br/>
                                <Stack direction={['column', 'row']} spacing='12px'>
                                    <Box>
                                        <Text>
                                            {props?.DayOfWeek || ''}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text>
                                            {props?.OpenTime || ''} - {props?.CloseTime || ''}
                                        </Text>
                                    </Box>
                                    
                                </Stack>

                                <br/>
                                Website: {props?.Website || ''}
                                <br/>
                                Phone Number: {props?.PhoneNumber || ''}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>    
                        
                    </CardBody>
                </Card>
            </VStack>
        </div>
    )
} 