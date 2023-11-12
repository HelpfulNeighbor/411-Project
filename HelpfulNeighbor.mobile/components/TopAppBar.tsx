import * as React from 'react';
import { Appbar, IconButton, MD3Colors } from 'react-native-paper';
import SearchBar from './Search/SearchBar';
import { View } from 'react-native';

export default function TopAppBar(){

    return (
        <Appbar.Header mode='medium' style={{ paddingLeft: 60, paddingRight: 10, width:'100%' }}>
            <SearchBar />
            <IconButton
                icon="filter"
                iconColor={MD3Colors.primary40}
                size={20}
                onPress={() => console.log('Pressed')}
            />
    </Appbar.Header>
    )
 
};

