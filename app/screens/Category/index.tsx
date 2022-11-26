import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamList } from '../../navigation/DrawerNavigator';
import Button from '../../components/Button';
import { MANAGE_CATEGORIES, ADD_CATEGORYITEM_LAYOUT } from '../../utils/Constants';
import ListItemLayout from '../../layouts/ListItemLayout';
import Theme from '../../utils/Theme';
import { connect } from 'react-redux';
import getCategories, { addCategories, deleteCategory } from '../../actions/categoriesActions';
import getListItems from '../../actions/listItemsAction';
 
type Props = NativeStackScreenProps<DrawerParamList, 'Category'> & {
  name: string;
  categories: any;
  fields: [{id: number, name: 'string', type: 'string'}];
}

const Category = (props : Props) => {
  const [fields, setFields] = useState([]); 
  const onAddFields = () => {
    setFields(props.fields)
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.name}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title={ADD_CATEGORYITEM_LAYOUT.label}
            onPressButton={onAddFields}
          />
        </View>
      </View>

      <ListItemLayout fields={fields} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
  getListItems: (categoryId) => dispatch(getListItems(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.header,
    padding: 10
  },
  scrollView: {
    paddingBottom: 50
  },
  title: {
    fontSize: 22,
    color: Theme.text,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  buttonContainer: {
    width: '50%'
  }
});
