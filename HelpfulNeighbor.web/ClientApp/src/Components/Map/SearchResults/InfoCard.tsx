import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Card,
    CardBody,
    Heading,
    Icon,
    IconButton,
    StackDivider,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { GoBookmark } from "react-icons/go";
  import { FaClock } from "react-icons/fa";
  import { FaGlobeAmericas } from "react-icons/fa";
  import { FaPhoneAlt } from "react-icons/fa";
  import { FaLocationDot } from "react-icons/fa6";
  
  interface HoursOfOperation {
    DayOfWeek: string;
    OpenTime: string;
    CloseTime: string;
  }
  
  interface InfoCardProps {
    Name: string;
    ResourceType: string;
    Address: string;
    hoursOfOperation?: HoursOfOperation[]; 
    Website: string;
    PhoneNumber: string;
  }
  
  export default function InfoCard(props: InfoCardProps) {

    const infoCardStyle: React.CSSProperties = {
      width: '100%',
      position: 'relative'
    };
  
    return (
      <div style={infoCardStyle}>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
        >
          <Card>
            <CardBody>
            <Heading size='sm'>
                {props.Name}
                <IconButton
                          icon={<GoBookmark />}
                          variant='ghost'
                          size='lg'
                          colorScheme="purple"
                          aria-label={"Bookmark Resource"}
                        />
              </Heading>
              <p>{props.ResourceType || ''}</p>
              <br/>
              <p><Icon color="purple.500" as={FaLocationDot}/>{props.Address || ''}</p>
              <p><Icon color="purple.500" as={FaGlobeAmericas} /> {props.Website || ''}</p> 
              <br />
              <p><Icon color="purple.500" as={FaPhoneAlt} /> {props.PhoneNumber || ''}</p>
              <br/>
              {props.hoursOfOperation && props.hoursOfOperation.length > 0 ? (
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          <p><Icon color="purple.500" as={FaClock} /></p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {props.hoursOfOperation.map((hours, index) => (
                        <div key={index}>
                          <b>{hours.DayOfWeek || "N/A"}</b>
                          <br />
                          Open: {hours.OpenTime || "N/A"}
                          <br />
                          Close: {hours.CloseTime || "N/A"}
                          <br />
                        </div>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Text>No hours of operation available.</Text>
              )}
            </CardBody>
          </Card>
        </VStack>
      </div>
    );
  }