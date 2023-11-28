import * as React from 'react';
import { View } from 'react-native';
import { Card, List, Text } from 'react-native-paper';

interface HoursOfOperation {
    DayOfWeek: string;
    OpenTime: string;
    CloseTime: string;
  }
  
  interface InfoCardProps {
    Name: string;
    ResourceType: string;
    Address: string;
    hoursOfOperation?: HoursOfOperation[]; 
    Website: string;
    PhoneNumber: string;
  }

const InfoCard = (props: InfoCardProps) =>{
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return(

        <>
            <Card>
                <Card.Content>
                <Text variant="titleLarge">{props.Name}</Text>
                <Text variant="bodyMedium">{props.ResourceType}</Text>
                <Text>{props.Address}</Text>
                <Text>{props.PhoneNumber}</Text>
                <Text>{props.Website}</Text>
                </Card.Content>
                <Card.Actions>
                    <List.Section title="Hours Of Operation">
                    {props.hoursOfOperation && props.hoursOfOperation.length > 0 ? (
                    <List.Accordion
                        title="Hours Of Operation"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded}
                        onPress={handlePress}>
                        {props.hoursOfOperation.map((hours, index) => (
                            <View key={index}>
                                <List.Item title={hours.DayOfWeek || "N/A"} />
                                <List.Item title={hours.OpenTime || "N/A"} />
                                <List.Item title={hours.CloseTime || "N/A"} />
                            </View>
                        ))}
                    </List.Accordion>
                
                    ) : (
                        <Text>No hours of operation available.</Text>
                      )}
                    </List.Section>
                </Card.Actions>
            </Card>
        </>
    );
}

export default InfoCard;