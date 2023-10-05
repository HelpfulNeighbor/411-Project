import React from "react";
import { SafeAreaView, ScrollView,Text } from "react-native";
import Style from "./Style";

const ProfileScreen = () => {


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <Text style ={Style.title}>Profile Screen</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;