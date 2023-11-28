import React, { useRef } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import {Text} from 'react-native-paper';
import InfoCard from './InfoCard';
import { SearchResults } from '../../../data/queries/ResourceQueries';
import { SearchResult } from '../../../data/queries/ResourceQueries';
import Style from '../../../screens/SearchScreen/Style';

interface SearchProps{
  searchResults: SearchResults;
}

const SearchResultsPanel = ({searchResults}: SearchProps) => {
  const panY = useRef(new Animated.Value(650)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_event, gestureState) => {
        const newPanY = gestureState.dy;

         panY.setValue(Math.max(newPanY, 200));
         panY.setValue(Math.min(newPanY, 750));
        },
      onPanResponderRelease: () => {
        // You can add additional logic here if needed
      },
    })
  ).current;

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
        transform: [{ translateY: panY }],
      }}
      {...panResponder.panHandlers}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
        }}
      >
        <View
          style={{
            width: 40,
            height: 5,
            backgroundColor: '#ccc',
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ padding: 16 }}>
        <>
          {searchResults.resources && searchResults.resources.length > 0 ? (
            <>
              <View style={Style.searchResultsFound}>
                <Text variant="titleMedium">{searchResults.resources.length} Search Results Found</Text>
              </View>
              {searchResults.resources.map((result: SearchResult, index: number) => (
                <View key={index}>
                  <InfoCard
                    Name={result.resource.Name}
                    ResourceType={result.resource.ResourceType}
                    Address={result.resource.Address}
                    hoursOfOperation={result.hoursOfOperation || []}
                    Website={result.resource.Website}
                    PhoneNumber={result.resource.PhoneNumber}
                  />
                </View>
              ))}
            </>
          ) : (
            <Text >No search results found.</Text>
          )}
        </>
      </View>
    </Animated.View>
  );
};

export default SearchResultsPanel;


