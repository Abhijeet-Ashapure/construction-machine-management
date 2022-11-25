import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface CustomTextProps {
    label: string,
    style: any,
}

const defaultProps: CustomTextProps = {
    label: '',
    style: null,
};

const CustomText = (props: CustomTextProps) => {
    return (
        <Text style={props.style}>{props.label}</Text>
    );
};

CustomText.defaultProps = defaultProps;

export default CustomText;