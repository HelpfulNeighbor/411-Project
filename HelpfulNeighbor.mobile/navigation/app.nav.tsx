import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabNavigator from "./BottomTabNav";
import { getCurrentUser } from '../data/queries/user-queries';


const AppNav = () => {
    const currentUser = getCurrentUser(); 

    const renderAuth = () => {
        if (currentUser === null) {
          console.log(currentUser);
          return (
            <>
            
            </>
          );
        } else {
          console.log('NULL');
          return( 
            <>
              <BottomTabNavigator />
            </>
          )
        }
      };
    
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {renderAuth()}
        </GestureHandlerRootView>
      );
    }; 


export default AppNav;