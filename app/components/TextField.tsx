import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Scale, { verticalScale } from '../utils/Scale';
import Theme from '../utils/Theme';

type TextFieldProps = {
    label: string;
    editable: boolean;
    onChange: (str: string) => void;
    onFocus: (str: string) => String;
    value: string;
    multiline: boolean;
    style: any;
}

const defaultProps: TextFieldProps = {
    label: 'Enter name',
    editable: true,
    onChange: () => '',
    onFocus: () => '',
    value: '',
    multiline: false,
    style: null
};

const TextField = (props: TextFieldProps) => {
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

TextField.defaultProps = defaultProps;

export default TextField;

const styles = StyleSheet.create({
    textfield: {
        borderWidth: 1,
        borderColor: Theme.border,
        borderRadius: 5,
        height: verticalScale(40),
        paddingHorizontal: Scale(5),
        color: Theme.text,
        fontSize: 16,
        flex: 1
    }
})