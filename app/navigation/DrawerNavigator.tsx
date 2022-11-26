import React, { useEffect } from 'react';
import {Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import Category from '../screens/Category';
import ManageCategories from '../screens/ManageCategories';
import { connect } from 'react-redux';
import getCategories from '../actions/categoriesActions';

export type DrawerParamList = {
  Dashboard: undefined,
  ManageCategories: undefined,
  Category: undefined
};

const Drawer = createDrawerNavigator<DrawerParamList>();

type Props = {
  getCategories: () => void;
  categories: any;
}

const DrawerNavigator = ({ getCategories, categories }: Props) => {
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      {
        categories.map((item) => item.name !== "" && <Drawer.Screen name={item.name} component={Category} />)
      }
      <Drawer.Screen name="ManageCategories" component={ManageCategories} />
    </Drawer.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoriesReducer.categories
  };
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);