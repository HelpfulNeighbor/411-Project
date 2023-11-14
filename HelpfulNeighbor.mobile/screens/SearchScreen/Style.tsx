import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: "#e0e6ec",
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  searchBar: {
    position: 'absolute',
    top: 50,
    right: '20%',
    left: '3%',
    backgroundColor: 'white',
  },
  filter: {
    position: 'absolute',
    top: 55,
    right: '5%',
    backgroundColor: 'white',
    borderRadius: 40,
  },
});

export default Style;
