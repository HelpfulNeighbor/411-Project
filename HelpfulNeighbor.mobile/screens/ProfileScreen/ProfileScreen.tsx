import * as React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import Style from "./Style";
import { Button } from 'react-native-paper';
import { useAuth } from '../../authentication/AuthContext';
import SavedResourceCard from '../../components/Search/SavedResourceCard';

const ProfileScreen = () => {
    const { onLogout } = useAuth();


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <Text style = {Style.title}>Your Saved Resources:</Text>
                <SavedResourceCard Name={''} ResourceType={''} Address={''} Website={''} PhoneNumber={''} Latitude={0} Longitude={0} Distance={0} />
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

