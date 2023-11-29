import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from "react-native";
import Style from "./Style";
import SavedResourceCard from '../../components/Search/SavedResourceCard';

const ProfileScreen = () => {


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <Text style = {Style.title}>Your Saved Resources:</Text>
                <SavedResourceCard Name={''} ResourceType={''} Address={''} Website={''} PhoneNumber={''} Latitude={0} Longitude={0} Distance={0} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;
