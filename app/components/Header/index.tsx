import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface HeaderProps {
    title: string;
}

const defaultProps: HeaderProps = {
    title: '',
};

const HeaderComponent = (props: HeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

HeaderComponent.defaultProps = defaultProps;

export default HeaderComponent;
