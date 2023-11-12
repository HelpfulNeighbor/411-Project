import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


export default function NativeMap(){

    return (
      <View style={styles.container}>
      <MapView 
      style={styles.map}
      initialRegion={{
        latitude: 30.51675,
        longitude: -90.47158,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
       />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});