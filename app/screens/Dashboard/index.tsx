import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { DrawerParamList } from '../../navigation/DrawerNavigator';

type Props = NativeStackScreenProps<DrawerParamList, 'Dashboard'>;

const Dashboard = ({navigation}: Props) => {
  return (
    <View style={styles.mainContainer}>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
