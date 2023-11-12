import {StyleSheet} from "react-native";

const Style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        backgroundColor: "#e0e6ec",
    },
    title:{
        marginTop: 16,
        paddingVertical: 8,
        color: '#7a5cce',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },
    infoCard:{
        marginTop: 16,
    },
    searchBar:{
        position: 'absolute',
        top: 50,
        marginRight: '20%',
        marginLeft: '3%',
        backgroundColor: 'white'
    },
    filter:{
        position: 'absolute',
        top: 55,
        marginLeft: '84%',
        marginRight:'5%',
        backgroundColor: 'white',
        borderRadius: 40,
    }
})

export default Style;