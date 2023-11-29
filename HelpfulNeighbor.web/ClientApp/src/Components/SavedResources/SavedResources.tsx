import { Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";
import SavedResourceCard from "./SavedResourceCard";
import React, { useEffect, useState } from "react";
import api from "../../Api/config";
import { fetchSavedResources, SavedResourceDto } from "../../Data/Queries/SavedResourceQueries";
import { UserGetDto } from "../../Data/Types/UserTypes";

interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

function distance(userLat: number, userLong: number, resourceLat: number, resourceLong: number): number {
  if (Math.abs(userLat) > 90 || Math.abs(resourceLat) > 90 || Math.abs(userLong) > 180 || Math.abs(resourceLong) > 180) {
    throw new Error("Invalid latitude or longitude value");
  }

  const userLatRad = toRadians(userLat);
  const userLongRad = toRadians(userLong);
  const resourceLatRad = toRadians(resourceLat);
  const resourceLongRad = toRadians(resourceLong);

  const earthRadius = 6371;

  const deltaLat = resourceLatRad - userLatRad;
  const deltaLong = resourceLongRad - userLongRad;

  const formula1 = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(userLatRad) * Math.cos(resourceLatRad) *
    Math.sin(deltaLong / 2) * Math.sin(deltaLong / 2);
  const formula2 = 2 * Math.atan2(Math.sqrt(formula1), Math.sqrt(1 - formula1));
  const calculatedDistance = earthRadius * formula2 * 0.621371;

  const roundedNum: string = calculatedDistance.toFixed(2); 

  return calculatedDistance;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

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

  const [viewport, setViewport] = useState<Viewport>({
    latitude: 30.51675,
    longitude: -90.47158,
    zoom: 12
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 16,
      }));
    });
  }, []);

  return (
    <>
      <div>
        <Heading mt={5} mb={10} textAlign="center">
          Your Saved Locations
        </Heading>
      </div>
      {savedResources && savedResources.length > 0 ? (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
          {savedResources.map((savedResource) => {
            const calculatedDistance =
            typeof savedResource.latitude === 'number' &&
            typeof savedResource.longitude === 'number'
              ? distance(
                  viewport.latitude,
                  viewport.longitude,
                  savedResource.latitude,
                  savedResource.longitude
                )
              : undefined;
            return (
              <div key={savedResource.resourceId}>
              <SavedResourceCard
                userId={user?.id || 0}
                resource={savedResource}
                Distance={calculatedDistance || 0}
                setSavedResources={setSavedResources}
              />
            </div>
            );
          })}
        </SimpleGrid>
      ) : (
        <Box textAlign="center">
          <Text>No resources are currently saved.</Text>
        </Box>
      )}
    </>
  );
}