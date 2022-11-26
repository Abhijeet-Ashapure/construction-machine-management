import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Theme from '../utils/Theme';
import Scale from '../utils/Scale';

type ButtonProps = {
    title: string,
    onPressButton: () => void;
    float: boolean,
    secondary: boolean,
}

const defaultProps: ButtonProps = {
    title: '',
    onPressButton: () => { },
    float: false,
    secondary: false
};

const Button = ({ title, float, onPressButton, secondary }: ButtonProps) => {
    return (
        secondary ?
        <TouchableOpacity
            style={float ? [styles.secondary, styles.floatButton] : styles.secondary}
            onPress={onPressButton}
        >
            <Text style={styles.secondaryTitle}>{title}</Text>
        </TouchableOpacity>
        : 
        <TouchableOpacity
            style={float ? [styles.button, styles.floatButton] : styles.button}
            onPress={onPressButton}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

Button.defaultProps = defaultProps;

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Theme.buttonBackground,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondary: {
        backgroundColor: Theme.white,
        flex: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Theme.buttonBackground,
        borderWidth: 1
    },
    floatButton: {
        position: 'absolute',
        bottom: 10,
    },
    title: {
        color: Theme.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    secondaryTitle: {
        color: Theme.buttonBackground,
        fontSize: 16,
        fontWeight: 'bold'
    },
})