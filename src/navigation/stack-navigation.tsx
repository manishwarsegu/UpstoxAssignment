import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HoldingsListScreen from "../screens/HoldingsListScreen";
import { RouteNames } from './route-names';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
            }}
            initialRouteName={RouteNames.holdingsList}>
            <Stack.Screen
                name={RouteNames.holdingsList}
                options={({ navigation }) => ({
                    headerTitle: 'Upstox Holding',
                    headerStyle: {
                        backgroundColor: '#5a298c', // Change header background color
                      },
                      headerTintColor: '#fff', // Change text color
                })}
                component={HoldingsListScreen as React.ComponentType} />
        </Stack.Navigator>
    )
}

export default StackNavigation;