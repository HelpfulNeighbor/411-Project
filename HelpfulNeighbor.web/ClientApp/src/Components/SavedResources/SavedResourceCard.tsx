import { CloseIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, Flex, Heading, IconButton,Stack, Text } from "@chakra-ui/react";

interface SavedResourceCardProps{
    Name: string;
    ResourceType: string;
    // Address: string;
    // Website: string;
    // PhoneNumber: string;
    // Latitude: number;
    // Longitude: number;
    Distance?: number;
}


export default function SavedResourceCard({ Name, ResourceType, Distance }: SavedResourceCardProps) {
  return (
    <>
    <Card maxW='md'>
        <CardBody>
            <Flex justify='end'>
            <IconButton 
            colorScheme='red'
            aria-label='Delete Saved Resource'
            icon={<CloseIcon />}
            variant='ghost' 
            />
            </Flex>
            <Stack spacing='3'>
                <Heading textAlign='center' size='sm' color='purple.500'>{Name}</Heading>
                <Text>{ResourceType}</Text>
                <Text>Distance: {Distance !== undefined ? Distance.toFixed(2) : 'N/A'} miles</Text>
                <Button>View More Details</Button>
                <Button>Go to Map</Button>
            </Stack>
        </CardBody>
    </Card>
    </>
  );
}
