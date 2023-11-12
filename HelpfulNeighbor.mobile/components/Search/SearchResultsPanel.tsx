import React, { useRef } from 'react';
import { View, Text, Animated, PanResponder } from 'react-native';

const SearchResultsPanel = () => {
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
        <Text>Search Result 1</Text>
        <Text>Search Result 2</Text>
      </View>
    </Animated.View>
  );
};

const SearchBarWithResultsPanel = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchResultsPanel />
    </View>
  );
};

export default SearchBarWithResultsPanel;
