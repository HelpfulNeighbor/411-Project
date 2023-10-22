import { Card, CardBody, CardHeader, Heading, IconButton, Link, StackDivider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { GoBookmark } from "react-icons/go";

export default function InfoCard(){
    let name;
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
                    <Heading size='sm'>{name}</Heading>
                </CardHeader>
                    <CardBody>
                        <Text>Distance: </Text>
                        <Text>{distance}</Text>
                        <br/>
                        <Link>View More</Link>
                        <IconButton icon={<GoBookmark/>} variant='ghost' size='lg' colorScheme="purple"  aria-label={"Bookmark Resource"}/>
                    </CardBody>
                </Card>
            </VStack>
        </div>
    )
} 