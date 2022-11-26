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

type Props = NativeStackScreenProps<DrawerParamList, 'ManageCategories'> & {
  getCategories: () => void;
  addCategories: (items: any) => void;
  categories: any
};

const ManageCategories = ({ getCategories, addCategories, categories }: Props) => {
  useEffect(() => {
    getCategories();
    // asyncdeleteCategory()
  }, [])

  const asyncdeleteCategory = async () => {
    await AsyncStorage.clear()
  }

  const onEditCategory = (item, fields, name) => {
    const index = categories.findIndex(o => o.id === item.id);
    categories[index] = {
      ...item,
      name: name,
      fields: fields,
    };
    if (categories.length > 0)
      addCategories(categories);
  }

  const onAddCategory = () => {
    const data = {
      id: categories.length > 0 ? categories[categories.length - 1].id + 1 : 0,
      name: '',
      fields: [
        {
          id: 0,
          name: '',
          type: 'TEXT'
        }
      ]
    }
    categories.push(data)
    addCategories([...categories]);
  }

  const onDeleteCategory = (item) => {
    const index = categories.findIndex(o => o.id === item.id);
    categories.splice(index, 1);
    addCategories([...categories]);
    getCategories();
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {
          categories.map(element => {
            return (
              <NewCategoryLayout {...element} onEditCategory={onEditCategory} onDeleteCategory={onDeleteCategory} />
            )
          })
        }
      </ScrollView>
      <Button
        title={MANAGE_CATEGORIES.button}
        float
        onPressButton={onAddCategory}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categoriesReducer.categories
  };
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  addCategories: (data) => dispatch(addCategories(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategories);


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.header,
  },
  scrollView: {
    paddingBottom: 50
  }
});
