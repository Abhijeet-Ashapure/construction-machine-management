import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import getDayOfWeek from '../../utils/utilFunctions';

interface DateHeaderProps {
    date: string,
}

const defaultProps: DateHeaderProps = {
    date: '',
};

const DateHeader = (props: DateHeaderProps) => {
    return (
        <View style={styles.dateHeader}>
            <Text style={styles.dateHeaderText}>{getDayOfWeek(props.date)}, {props.date} </Text>
        </View>
    );
};

DateHeader.defaultProps = defaultProps;

export default DateHeader;