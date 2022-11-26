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
import getListItems, { addListItems } from '../../actions/listItemsAction';

type Props = NativeStackScreenProps<DrawerParamList, 'Category'> & {
  name: string;
  categories: any;
  fields: [{ id: number, name: 'string', type: 'string' }];
  addListItems: (any) => void;
}

const Category = (props: Props) => {
  const [fields, setFields] = useState([]);
  let data = {};
  const onAddFields = () => {
    setFields(props.fields);
    Object.keys(props.fields).forEach(element => {
      data[props.fields[element].name] = ""
    })
    data["categoryId"] = props.id;
    props.addListItems(data);
  }

  const onEditFields = (items) => {
    setFields([...items])
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

      <ListItemLayout fields={fields} onEditFields={onEditFields} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    listItems: state.categoriesReducer.listItems
  };
};

const mapDispatchToProps = dispatch => ({
  getListItems: (categoryId) => dispatch(getListItems(categoryId)),
  addListItems: (data) => dispatch(addListItems(data)),
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
    alignItems: 'center'
  },
  buttonContainer: {
    width: '50%'
  }
});
