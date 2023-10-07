import React from "react";
import { SafeAreaView, ScrollView,Text } from "react-native";
import Style from "./Style";

const HomeScreen = () => {


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <Text style ={Style.title}>Home Screen</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
