import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';

// TODO: Enumerate screen names to avoid string literals.
const RootStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStackNavigator;
