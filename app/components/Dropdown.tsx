import React, { useState } from 'react';
import { Modal, FlatList, Text, View, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Theme from '../utils/Theme';

type Props = {
  defaultButtonText: string;
  data: any,
  onSelect: (selectedItem: object, index: number) => void;
}

const Dropdown = ({ defaultButtonText, onSelect, data }: Props) => {
  return (
    <SelectDropdown
      defaultButtonText={defaultButtonText}
      buttonStyle={styles.buttonStyle}
      buttonTextStyle={styles.buttonTextStyle}
      data={data}
      onSelect={(selectedItem, index) => {
        onSelect(selectedItem, index)
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return "ADD NEW ITEM"
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item
      }}
    />
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Theme.white,
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.buttonBackground,
    borderWidth: 1
  },
  buttonTextStyle: {
    color: Theme.buttonBackground,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Dropdown;