import * as React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import Style from "./Style";
import { useAuth } from '../../authentication/AuthContext';
import { Button } from 'react-native-paper';


const ProfileScreen = () => {
    const { onLogout } = useAuth();


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <Text style ={Style.title}>Profile</Text>
                <Button style={styles.button} mode="contained" onPress={onLogout} >Sign out</Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        gap: 10,
        width: '60%',
        marginLeft: '20%',
        marginTop: '20%',
    }
});

export default ProfileScreen;
