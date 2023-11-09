import 'expo-dev-client';
import React from "react";
import { StyleSheet, View } from "react-native";
import Mapbox from '@rnmapbox/maps';


Mapbox.setAccessToken('pk.eyJ1IjoiaXRzYWtlbm5lZHkiLCJhIjoiY2xteHQ3aGw2MTE1dDJyb2MycWRkdXBtaCJ9.4xKC5L4w6FFUUJUNzHabvg');

const NativeMap = () => {

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} />
            </View>
        </View>
    )
}

export default NativeMap;

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      height: 300,
      width: 300,
    },
    map: {
      flex: 1
    }
  });