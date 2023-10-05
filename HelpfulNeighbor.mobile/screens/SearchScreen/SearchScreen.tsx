import React from "react";
import { SafeAreaView, ScrollView,Text } from "react-native";
import Style from "./Style";

const SearchScreen = () => {


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <Text style ={Style.title}>Search Screen</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SearchScreen;