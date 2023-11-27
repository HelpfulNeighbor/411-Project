import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";

export default function SavedLocations() {
  return (
    <>
    <div>
        <Heading mt={5} mb={10} textAlign="center">Here are all your saved locations!</Heading>
    </div>
    <Card maxW='sm'>
        <CardBody>
            <Stack spacing='3'>
                <Heading size='sm' color='purple.500'>Test Card</Heading>
                <Text>All resource info will go here</Text>
            </Stack>
        </CardBody>
    </Card>
    </>
  );
}
