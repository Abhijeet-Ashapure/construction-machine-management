import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Theme from '../utils/Theme';
import TextField from '../components/TextField';
import { ADD_CATEGORY_LAYOUT } from '../utils/Constants';
import { images } from '../assets';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

type Props = {
  name: string,
  fields: any,
  onEditCategory: (object, any, string) => void;
  onDeleteCategory: (object) => void;
}

const NewCategoryLayout = (props: Props) => {
  const [name, setName] = useState(props.name);
  const [fields, setFields] = useState(props.fields);
  const [addButtonLabel, setAddButtonLabel] = useState(ADD_CATEGORY_LAYOUT.addNewField);

  useEffect(() => {
    props.onEditCategory(props, fields, name)
  }, [fields, name])

  const onRemoveField = () => {
    setFields([{ id: 0, name: '', type: 'TEXT' }])
    setName("")
    props.onDeleteCategory(props);
  }

  const onSelectItem = (selectedItem, index) => {
    setFields([...fields, {
      id: fields[fields.length - 1].id + 1,
      name: '',
      type: selectedItem,
    }])
  }

  const onDeleteItem = (selectedItem) => {
    const index = fields.indexOf(selectedItem);
    if (index > 0) {
      fields.splice(index, 1);
      setFields([...fields]);
    } else {
      props.onDeleteCategory(props);
    }
  }

  const onChangeText = (value, element) => {
    const updatedData = fields.map(item => (item.id === element.id ? { ...item, name: value } : item));
    setFields(updatedData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {name === '' ? 'Category Name' : name}
      </Text>
      <View style={styles.nameContainer}>
        <TextField
          label={ADD_CATEGORY_LAYOUT.label}
          value={name}
          onChange={(text) => setName(text)}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={fields}
          renderItem={({ item }) => (
            <View style={styles.listView}>
              <TextField
                label={'Field'}
                value={item.name}
                onChange={value => onChangeText(value, item)}
              />
              <Text style={styles.type}>{item.type}</Text>
              <TouchableOpacity onPress={() => onDeleteItem(item)}>
                <Image source={images.delete} resizeMode={'center'} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.actionButtons}>
          <Dropdown
            defaultButtonText={addButtonLabel}
            onSelect={onSelectItem}
            data={ADD_CATEGORY_LAYOUT.addDropdowndata}
          />
          <Button
            title={`${ADD_CATEGORY_LAYOUT.remove}`}
            secondary
            onPressButton={onRemoveField}
          />
        </View>
      </View>
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
  nameContainer: {
    height: 50,
  },
  title: {
    fontSize: 18,
    color: Theme.text,
    fontWeight: '500',
    paddingBottom: 10,
  },
  list: {
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  type: {
    color: Theme.buttonBackground,
    marginLeft: 10
  },
  actionButtons: {
    flexDirection: 'row',
  }
});
export default NewCategoryLayout;