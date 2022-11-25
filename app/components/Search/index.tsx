import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TextField from '../TextField';
import Button from '../Button';
import { CONSTANTS } from '../../utils/Constants';
import Loader from '../WeatherElement/Loader';

interface SearchProps {
    onChangeText: (str: string) => void;
    onPressButton?: () => void;
    value: string;
    isWeatherDataLoading: boolean;
}

const defaultProps: SearchProps = {
    onChangeText: () => '',
    onPressButton: () => { },
    value: '',
    isWeatherDataLoading: false,
};

const SearchComponent = (props: SearchProps) => {
    return (
        <View style={styles.container}>
            <TextField
                onChange={(text) => props.onChangeText(text)}
                value={props.value}
            />
            {
                props.isWeatherDataLoading ?
                    <Loader size="small" />
                    :
                    <Button
                        title={CONSTANTS.button}
                        onPressButton={() => props.onPressButton()}
                    />
            }
        </View>
    );
};

SearchComponent.defaultProps = defaultProps;

export default SearchComponent;