import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Avatar } from 'react-native-paper';
import Style from "./Style";


const ProfileScreen = () => {


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                
                <Text style ={Style.title}>Profile Screen</Text>
                <Avatar.Icon size={24} icon="contacts" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;
