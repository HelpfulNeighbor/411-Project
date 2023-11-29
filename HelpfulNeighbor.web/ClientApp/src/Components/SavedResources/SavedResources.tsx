import { Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";
import SavedResourceCard from "./SavedResourceCard";
import React, { useEffect, useState } from "react";
import api from "../../Api/config";
import { fetchSavedResources, deleteSavedResource, SavedResourceDto } from "../../Data/Queries/SavedResourceQueries";
import { UserGetDto } from "../../Data/Types/UserTypes";

export default function SavedResources() {
  const [user, setUser] = useState<UserGetDto | null>(null);
  const [savedResources, setSavedResources] = useState<SavedResourceDto[] | null>(null);

  useEffect(() => {
    api
      .get<UserGetDto>("/api/authentication/me")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const resources = await fetchSavedResources(user.id);
          console.log("Fetched resources:", resources);
          if (Array.isArray(resources)) {
            setSavedResources(resources);
          } else {
            setSavedResources(null);
          }
        } else {
          setSavedResources(null);
        }
      } catch (error) {
        console.error("Error fetching saved resources:", error);
        setSavedResources(null);
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      <div>
        <Heading mt={5} mb={10} textAlign="center">
          Your Saved Locations
        </Heading>
      </div>
      {savedResources && savedResources.length > 0 ? (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
          {savedResources.map((resource) => (
            <div key={resource.savedResourceId}>
              <SavedResourceCard
                Name={resource.resourceId.Name}
                ResourceType={resource.resourceId.ResourceType}
              />
            </div>
          ))}
        </SimpleGrid>
      ) : (
        <Box textAlign="center">
          <Text>No resources are currently saved.</Text>
        </Box>
      )}
    </>
  );
}
