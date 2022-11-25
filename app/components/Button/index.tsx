import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface ButtonProps {
    title: string,
    onPressButton: () => void;
}

const defaultProps: ButtonProps = {
    title: '',
    onPressButton: () => {}
};

const ButtonComponent = (props: ButtonProps) => {
    return (
        <TouchableOpacity onPress={() => props.onPressButton()}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
};

ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;