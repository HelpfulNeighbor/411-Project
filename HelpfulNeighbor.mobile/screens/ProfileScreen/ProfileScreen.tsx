import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Avatar } from 'react-native-paper';
import Style from "./Style";


const ProfileScreen = () => {


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <Text style ={Style.title}>Welcome to Helpful Neighbor!</Text>
                <Text style ={Style.subtitle}>Please sign in below.</Text>
                <Avatar.Icon size={24} icon="contacts" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;
