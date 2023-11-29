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
    // Distance: number;
}

export default function SavedResourceCard(props: SavedResourceCardProps) {
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
                <Heading textAlign='center' size='sm' color='purple.500'>{props.Name}</Heading>
                <Text>{props.ResourceType}</Text>
                <Text>Distance: </Text>
                <Button>View More Details</Button>
                <Button>Go to Map</Button>
            </Stack>
        </CardBody>
    </Card>
    </>
  );
}
