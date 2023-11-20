import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import InfoCard from './InfoCard';
import { SearchResults } from '../../../Data/Queries/ResourceQueries';
import { SearchResult } from '../../../Data/Queries/ResourceQueries';

interface ResultContainerProps{
    searchResults: SearchResults;
}

export default function ResultContainer({searchResults} : ResultContainerProps) {
    return(
        <div>
          <Flex
            minWidth="max-content"
            justifyContent="center"
          >
            <Box>
                <VStack spacing='6px'>
                <div>
              {searchResults.resources && searchResults.resources.length > 0 ? (
                <>
                  <p>{searchResults.resources.length} Search Results Found.</p>
                  {searchResults.resources.map((result: SearchResult, index: number) => (
                    <div key={index}>
                      <InfoCard
                        Name={result.resource.Name}
                        ResourceType={result.resource.ResourceType}
                        Address={result.resource.Address}
                        hoursOfOperation={result.hoursOfOperation || []}
                        Website={result.resource.Website}
                        PhoneNumber={result.resource.PhoneNumber}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <p>No search results found.</p>
              )}
            </div>
                </VStack>
            </Box>
            </Flex>
            
        </div>
    )
}