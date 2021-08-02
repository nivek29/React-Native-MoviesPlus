
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { Result } from '../interface/MovieInterface';
import { DetailsMovieScreen } from '../screens/DetailsMovieScreen';

import { HomeScreen } from '../screens/HomeScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type RootStackParams = {
    HomeScreen: undefined,
    DetailsMovieScreen: Result;
}

const Stack = createStackNavigator();

 
export const  Navigator = () => {
     return (
         <Stack.Navigator screenOptions= {{ headerShown: false, cardStyle: {backgroundColor:'white'}}}>
             <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
             <Stack.Screen name="DetailsMovieScreen" component={DetailsMovieScreen}></Stack.Screen>
             <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}></Stack.Screen>
             <Stack.Screen name="ProfileScreen" component={ProfileScreen}></Stack.Screen>
             <Stack.Screen name="SettingsScreen" component={SettingsScreen}></Stack.Screen>
         </Stack.Navigator>
     )
 }
 