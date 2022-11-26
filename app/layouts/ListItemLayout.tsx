import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Switch } from 'react-native';
import Theme from '../utils/Theme';
import TextField from '../components/TextField';
import { ADD_CATEGORY_LAYOUT } from '../utils/Constants';
import { images } from '../assets';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

// [ { id: 0, name: '', type: 'TEXT' } ]

type Props = {
  fields: any;
}

const ListItemLayout = ({ fields }: Props) => {
  const RenderTextField = (item) => {
    return (
      <TextField
        label={item.name}
      // value={name}
      // onChange={(text) => setName(text)}
      />
    )
  }

  const RenderDateInput = () => {
    return (
      <View />
    )
  }

  const RenderNumber = (item) => {
    return (
      <TextField
        label={item.name}
      // value={name}
      // onChange={(text) => setName(text)}
      />
    )
  }

  const RenderCheckbox = () => {
    return (
      <Switch
        // onValueChange={toggleSwitch}
        value={false}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Name"}</Text>
      <FlatList
        data={fields}
        renderItem={({ item }) => (
          <View style={styles.listView}>
            {item.type === "TEXT" ? <RenderTextField {...item} /> :
              item.type === "NUMBER" ? <RenderNumber /> :
                item.type === "DATE" ? <RenderDateInput /> :
                  <RenderCheckbox />}
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.white,
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 10
  },
  listView: {
    paddingBottom: 10
  }
});
export default ListItemLayout;