import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

interface TextFieldProps {
    label: string;
    editable: boolean;
    onChange: (str: string) => void;
    onFocus: (str: string) => String;
    value: string;
    multiline: boolean;
    style: any;
}

const defaultProps: TextFieldProps = {
    label: 'Enter city name',
    editable: true,
    onChange: () => '',
    onFocus: () => '',
    value: '',
    multiline: false,
    style: null
};

const TextFieldComponent = (props: TextFieldProps) => {
    return (
        <TextInput
            editable={props.editable}
            placeholder={props.label}
            onChangeText={props.onChange}
            onFocus={props.onFocus}
            value={props.value}
            multiline={props.multiline}
            style={
                props.style
                  ? props.style
                  : styles.textfield
              }
        />
    );
};

TextFieldComponent.defaultProps = defaultProps;

export default TextFieldComponent;