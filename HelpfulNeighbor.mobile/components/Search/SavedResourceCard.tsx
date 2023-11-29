import React from 'react';
import {
    View
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
    return <>   
        <Card style={{ margin: 15 }}>
            <Card.Content>
                <Text>{props.Name} Resource Name Here</Text>
                <Text>{props.ResourceType || ''}</Text>
                <Text>
                    <FaIcon name="running" color="#7a5cce" /> {props.Distance.toFixed(2)} mi.
                </Text>
                <Text>
                    <FaIcon name="location-dot" color="#7a5cce" /> {props.Address || ''}
                </Text>
                <Text>
                    <FaIcon name="globe-americas" color="#7a5cce" /> {props.Website || ''}
                </Text>
                <Text>
                    <FaIcon name="phone-alt" color="#7a5cce" /> {props.PhoneNumber || ''}
                </Text>
            </Card.Content>
            {props.hoursOfOperation && props.hoursOfOperation.length > 0 ? (
                <Card.Content>
                    {props.hoursOfOperation.map((hours, index) => (
                        <View key={index}>
                            <Text>{hours.DayOfWeek || 'N/A'}</Text>
                            <Text>Open: {hours.OpenTime || 'N/A'}</Text>
                            <Text>Close: {hours.CloseTime || 'N/A'}</Text>
                        </View>
                    ))}
                </Card.Content>
            ) : (
                <Text>N/A</Text>
            )}
        </Card></>;
}

export default SavedResourceCard;