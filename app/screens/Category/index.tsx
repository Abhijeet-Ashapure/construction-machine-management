import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamList } from '../../navigation/DrawerNavigator';
import Button from '../../components/Button';
import { MANAGE_CATEGORIES } from '../../utils/Constants';
import NewCategoryLayout from '../../layouts/NewCategoryLayout';
import Theme from '../../utils/Theme';
import { connect } from 'react-redux';
import getCategories, { addCategories, deleteCategory } from '../../actions/categoriesActions';

type Props = NativeStackScreenProps<DrawerParamList, 'Category'>

const Category = (props : Props) => {
  return (
    <View style={styles.mainContainer}>

    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categoriesReducer.categories
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.header,
  },
  scrollView: {
    paddingBottom: 50
  }
});
