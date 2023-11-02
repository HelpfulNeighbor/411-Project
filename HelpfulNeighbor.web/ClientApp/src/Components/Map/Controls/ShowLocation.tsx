import React, { useState } from "react";
import { IconButton } from '@chakra-ui/react';
import {BiCurrentLocation} from 'react-icons/bi';

interface ShowLocationProps{
    onTriggerGeolocation: () => void;
}

export default function ShowLocation({ onTriggerGeolocation } : ShowLocationProps){
    const locationButtonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '98%',
        left: '90%',
    }

    const handleButtonClick = () => {
        onTriggerGeolocation();
      };

    return(
        <div style={locationButtonStyle}>
            <IconButton
            colorScheme="purple"
            borderRadius="xl" 
            aria-label={"Show User Current Location"}  
            icon={<BiCurrentLocation/>}
            onClick={handleButtonClick}
            />
        </div>
    );
}