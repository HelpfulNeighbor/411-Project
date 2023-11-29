import { CloseIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, Flex, Heading, IconButton,Stack, Text } from "@chakra-ui/react";
import { deleteSavedResource, fetchSavedResources, SavedResourceDto } from "../../Data/Queries/SavedResourceQueries";

interface SavedResourceCardProps{
  userId: number; // Add userId as a prop
  resource: SavedResourceDto; // Change the prop name to resource
  Distance?: number;
  setSavedResources: React.Dispatch<React.SetStateAction<SavedResourceDto[] | null>>;
}

export default function SavedResourceCard({ userId, resource, Distance, setSavedResources }: SavedResourceCardProps) {

  const handleDeleteSavedResource = async (resourceId: number) => {
    // Delete a saved resource
    await deleteSavedResource(userId, resourceId);
    // Refresh the list of saved resources
    const updatedResources = await fetchSavedResources(userId);
    setSavedResources(updatedResources);
  };

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
            onClick={() => handleDeleteSavedResource(resource.resourceId)}
            />
            </Flex>
            <Stack spacing='3'>
                <Heading textAlign='center' size='sm' color='purple.500'>{resource.name}</Heading>
                <Text>{resource.resourceType}</Text>
                <Text>Distance: {Distance !== undefined ? Distance.toFixed(2) : 'N/A'} miles</Text>
                <Button>View More Details</Button>
                <Button>Go to Map</Button>
            </Stack>
        </CardBody>
    </Card>
    </>
  );
}
