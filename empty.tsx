import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';

export type DrawerParamList = {
    Dashboard: undefined
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
);

export default DrawerNavigator;