import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: "#e0e6ec",
  },
  title:{
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 8,
    color: '#7a5cce',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  }  
});

export default Style;
