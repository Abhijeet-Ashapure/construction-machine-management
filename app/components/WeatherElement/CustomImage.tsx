import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

interface CustomImageProps {
    imageUrl: string
}

const defaultProps: CustomImageProps = {
    imageUrl: 'large'
};

const CustomImage = (props: CustomImageProps) => {
    return (
        <Image source={{uri: props.imageUrl}} style={styles.imageStyle} />
    );
};

CustomImage.defaultProps = defaultProps;

export default CustomImage;