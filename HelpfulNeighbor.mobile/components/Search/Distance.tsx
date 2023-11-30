import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SavedResourceCard from './SavedResourceCard';
import { SearchResult, SearchResults } from '../../data/queries/ResourceQueries';


interface ResultsProps {
    searchResults: SearchResults;
}

interface Viewport {
    latitude: number;
    longitude: number;
}

function distance(userLat: number, userLong: number, resourceLat: number, resourceLong: number): number {
    if (Math.abs(userLat) > 90 || Math.abs(resourceLat) > 90 || Math.abs(userLong) > 180 || Math.abs(resourceLong) > 180) {
        throw new Error('Invalid latitude or longitude value');
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
    
      console.log('Distance = ', { roundedNum }, 'miles');
    
      return calculatedDistance;
    }
    
    function toRadians(degrees: number): number {
      return degrees * (Math.PI / 180);
    }
    
export default function Results({ searchResults }: ResultsProps) {
    const [viewport, setViewport] = useState<Viewport>({
        latitude: 30.51675,
        longitude: -90.47158,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setViewport({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
            });
        });
    }, []);

    return (
        <View>
            {searchResults.resources && searchResults.resources.length > 0 ? (
                searchResults.resources.map((result: SearchResult, index: number) => {
                    const calculatedDistance = distance(
                        viewport.latitude,
                        viewport.longitude,
                        result.resource.Latitude,
                        result.resource.Longitude
                    );

                    return (
                        <View key={index}>
                            <SavedResourceCard
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
                        </View>
                    );
                })
            ) : (
                <Text>No search results found.</Text>
            )}
        </View>
    )
}