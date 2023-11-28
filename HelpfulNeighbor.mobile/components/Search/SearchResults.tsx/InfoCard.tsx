import * as React from 'react';
import { View } from 'react-native';
import { Card, List, MD3Colors, Text } from 'react-native-paper';
import Style from '../../../screens/SearchScreen/Style';
import Icon from 'react-native-vector-icons/Ionicons';

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
                <Text style= {Style.searchResultsName}variant="titleMedium">{props.Name}</Text>
                <Text style={Style.searchResultsDetailsBolded} variant="bodyMedium">{props.ResourceType}</Text>
                <Text style={Style.searchResultsDetails}>{props.Address}</Text>
                <Text style={Style.searchResultsDetails}>{props.PhoneNumber}</Text>
                <Text style={Style.searchResultsDetails}>{props.Website}</Text>
                </Card.Content>
                <Card.Actions>
                    <List.Section 
                    style={Style.searchResultsDetailsBolded}
                    title="Hours Of Operation"
                    >
                    {props.hoursOfOperation && props.hoursOfOperation.length > 0 ? (
                    <List.Accordion
                        title=""
                        left={props => <List.Icon {...props} icon="clock" color={MD3Colors.primary50} />}
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