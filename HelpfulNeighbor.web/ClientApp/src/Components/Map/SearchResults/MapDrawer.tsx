import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import InfoCard from './InfoCard';
import { SearchResults } from '../../../Data/Queries/ResourceQueries';
import { SearchResult } from '../../../Data/Queries/ResourceQueries';

interface MapDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  searchResults: SearchResults;
}

export default function MapDrawer({ isOpen, onClose, searchResults }: MapDrawerProps) {
  console.log('searchResults in MapWithSearch:', searchResults);


  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">Search Results</DrawerHeader>
          <DrawerBody>
            <div>
              {searchResults.resources.map((result: SearchResult, index: number) => (
                <InfoCard
                  key={index}
                  Name={result.resource.Name}
                  ResourceType={result.resource.ResourceType}
                  Address={result.resource.Address}
                  DayOfWeek={result.hoursOfOperation?.DayOfWeek || ''}
                  OpenTime={result.hoursOfOperation?.OpenTime || ''}
                  CloseTime={result.hoursOfOperation?.CloseTime || ''}
                  Website={result.resource.Website}
                  PhoneNumber={result.resource.PhoneNumber}
                />
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
