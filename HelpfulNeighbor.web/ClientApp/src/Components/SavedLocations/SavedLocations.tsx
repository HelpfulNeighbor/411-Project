import { Card, CardBody, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function SavedLocations() {
  return (
    <>
    <div>
        <Heading mt={5} mb={10} textAlign="center"> Your Saved Locations</Heading>
    </div>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
    <Card maxW='md'>
        <CardBody>
            <Stack spacing='3'>
                <Heading size='sm' color='purple.500'>Test Card</Heading>
                <Text>All resource info will go here</Text>
            </Stack>
        </CardBody>
    </Card>
    <Card maxW='md'>
        <CardBody>
            <Stack spacing='3'>
                <Heading size='sm' color='purple.500'>Test Card</Heading>
                <Text>All resource info will go here</Text>
            </Stack>
        </CardBody>
    </Card>
    </SimpleGrid>
    </>
  );
}
