import * as React from 'react';
import { Button, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "./Style";
import { useAuth } from '../../authentication/AuthContext';


const ProfileScreen = () => {
    const { onLogout } = useAuth();


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <Text style ={Style.title}>Welcome to Helpful Neighbor!</Text>
                <Text style ={Style.subtitle}>Please sign out below.</Text>
                <Button title="Sign Out" onPress={onLogout} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;
