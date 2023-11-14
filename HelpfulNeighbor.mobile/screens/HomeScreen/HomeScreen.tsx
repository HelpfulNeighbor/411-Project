import React from "react";
import { SafeAreaView, ScrollView,Text } from "react-native";
import Style from "./Style";
import InfoCard from "../../components/Home/InfoCard";
const HomeScreen = () => {


    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                
                <Text style ={Style.title}>Helpful Neighbor</Text>
                < InfoCard />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
