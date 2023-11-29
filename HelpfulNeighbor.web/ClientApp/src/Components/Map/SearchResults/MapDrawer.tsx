import React, { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Heading,
} from '@chakra-ui/react';
import InfoCard from './InfoCard';
import { SearchResults } from '../../../Data/Queries/ResourceQueries';
import { SearchResult } from '../../../Data/Queries/ResourceQueries';

interface MapDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  searchResults: SearchResults;
}

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

  //const roundedNum: string = calculatedDistance.toFixed(2); 

  return calculatedDistance;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export default function MapDrawer({ isOpen, onClose, searchResults }: MapDrawerProps) {

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
    <Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">Search Results</DrawerHeader>
          <DrawerBody>
            <div>
              {searchResults.resources && searchResults.resources.length > 0 ? (
                <>
                  <b><Heading size='md' textAlign="center">{searchResults.resources.length} Search Results Found</Heading></b>
                  <br />
                  {searchResults.resources.map((result: SearchResult, index: number) => {
                    const calculatedDistance = distance(
                      viewport.latitude,
                      viewport.longitude,
                      result.resource.Latitude,
                      result.resource.Longitude
                    );

                    return (
                      <div key={index}>
                        <InfoCard
                          resourceId={result.resource.ResourceId}
                          Name={result.resource.Name}
                          ResourceType={result.resource.ResourceType}
                          Address={result.resource.Address}
                          hoursOfOperation={result.hoursOfOperation || []}
                          Website={result.resource.Website}
                          PhoneNumber={result.resource.PhoneNumber}
                          Latitude={result.resource.Latitude}
                          Longitude={result.resource.Longitude}
                          Distance={calculatedDistance || 0}
                        />
                      </div>
                    );
                  })}
                </>
              ) : (
                <p>No search results found.</p>
              )}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}