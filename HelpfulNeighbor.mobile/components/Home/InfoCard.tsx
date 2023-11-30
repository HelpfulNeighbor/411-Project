import * as React from "react";
import { Button, Card, Text } from "react-native-paper";
import {StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InfoCard() {

  return (
    <SafeAreaView>
      {/* <Card mode={"outlined"}>
        <Card.Content>
          <Card.Cover source={{ uri: "" }} />
        </Card.Content>
      </Card>  */}
        
      <Card mode={"outlined"} style={cardStyle.card}>
        <Card.Content>
          <Text 
            variant="titleLarge"
            style={cardStyle.body}
          >
            Helpful Neighbor is a platform that provides resources to individuals in need. At
            Helpful Neighbor, we strive to make a difference in our community
            and help alleviate homelessness in Louisiana. Sometimes, you just
            need a helping hand.
          </Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const cardStyle = StyleSheet.create({
    body:{
        paddingVertical: 8,
        textAlign: 'center',
        fontSize: 20,
        color: '#444',
        fontWeight: 'bold',
    },
    card:{
      marginTop: '25%'
    }
});