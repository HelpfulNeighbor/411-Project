import React, { useState } from 'react';
import {
    View,
    TouchableWithoutFeedback
} from 'react-native';
import { 
    Text, 
    IconButton,
    Card
} from 'react-native-paper';
import { FontAwesome5 as FaIcon } from '@expo/vector-icons';


interface HoursOfOperation {
    DayOfWeek: string;
    OpenTime: string;
    CloseTime: string;
}

interface SavedResourceCardProps {
    Name: string;
    ResourceType: string;
    Address: string;
    hoursOfOperation?: HoursOfOperation[];
    Website: string;
    PhoneNumber: string;
    Latitude: number;
    Longitude: number;
    Distance: number;
}


const SavedResourceCard: React.FC<SavedResourceCardProps> = (props) => {
        const [expanded, setExpanded] = useState(false);
        const toggleDropdown = () => {
            setExpanded(!expanded);
        };

    return ( 
        <>   
        <Card style={{ margin: 15 }}>
            <Card.Content>
                <Text>{props.Name} Example Homeless Shelter</Text>
                <Text>{props.ResourceType || ''}</Text>
                <Text>
                    <FaIcon name="running" color="#7a5cce" /> {props.Distance.toFixed(2)} mi.
                </Text>
                <Text>
                    <FaIcon name="map-marker-alt"color="#7a5cce" /> {props.Address || ''}
                    123 Example Street {'\n'}
                    Baton Rouge, LA
                </Text>
                <Text>
                    <FaIcon name="globe-americas" color="#7a5cce" /> {props.Website || ''}
                    www.websiteurl.com
                </Text>
                <Text>
                    <FaIcon name="phone-alt" color="#7a5cce" /> {props.PhoneNumber || ''}
                    (123)-456-7890
                </Text>
            <TouchableWithoutFeedback onPress={toggleDropdown}>
                <View>
                    <Text>Hours of Operation:</Text>
                </View>
            </TouchableWithoutFeedback>
            
            {expanded && props.hoursOfOperation && props.hoursOfOperation.length > 0 ? (
                <View>
                    {props.hoursOfOperation.map((hours, index) => (
                        <View key={index}>
                            <Text>{hours.DayOfWeek || 'N/A'}</Text>
                            <Text>Open: {hours.OpenTime || 'N/A'}</Text>
                            <Text>Close: {hours.CloseTime || 'N/A'}</Text>
                        </View>
                        ))}
                        </View>
                    ) : (
                        <Text>N/A</Text>
                    )}
                </Card.Content>
            </Card>
        </>
    );
};

export default SavedResourceCard;