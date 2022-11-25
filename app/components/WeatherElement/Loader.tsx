import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

interface LoaderProps {
    size: string
}

const defaultProps: LoaderProps = {
    size: 'large'
};

const Loader = (props: LoaderProps) => {
    return (
        <ActivityIndicator size={props.size}/>
    );
};

Loader.defaultProps = defaultProps;

export default Loader;