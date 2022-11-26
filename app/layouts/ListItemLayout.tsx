import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Switch } from 'react-native';
import Theme from '../utils/Theme';
import TextField from '../components/TextField';
import DatePicker from 'react-native-date-picker'

type Props = {
  fields: any;
  onEditFields: (any) => void;
}

const ListItemLayout = ({ fields, onEditFields }: Props) => {
  const [openDatePicker, setDatePickerStatus] = useState(false);
  // const [openDatePicker, setDatePickerStatus] = useState(false);

  const RenderTextField = (item) => {
    return (
      <TextField
        label={item.name}
        value={item.name}
        onChange={(text) => setName(text, item)}
      />
    )
  }

  const setName = (value, item) => {
    const objIndex = fields.findIndex((obj => obj.id == item.id));
    fields[objIndex] = {
      ...item,
      name: value,
    }    
    onEditFields(fields)

  }

  const RenderDateInput = (item) => {
    return (
      <TextField
        label={item.name}
        // value={item.name}
        // onChange={(text) => setName(text)}
      />
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

  const RenderCheckbox = (item) => {
    return (
      <View style={styles.checkboxStyle}>
        <Switch
          // onValueChange={toggleSwitch}
          value={false}
        />
        <Text>{item.name}</Text>
      </View>
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
              item.type === "NUMBER" ? <RenderNumber {...item} /> :
                item.type === "DATE" ? <RenderDateInput {...item} /> :
                  <RenderCheckbox {...item} />}
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <DatePicker
        modal
        open={openDatePicker}
        date={new Date()}
        onConfirm={(date) => {
          setDatePickerStatus(false)
          // setDate(date)
        }}
        onCancel={() => {
          setDatePickerStatus(false)
        }}
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
  },
  checkboxStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
export default ListItemLayout;