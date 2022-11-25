import React from 'react';
import { SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/Header';
import SearchComponent from '../../components/Search';
import { CONSTANTS } from '../../utils/Constants';
import WeatherList from './WeatherList';

interface WeatherSearchProps {
    weatherData: any;
    onChangeText: (str: string) => void;
    onPressButton?: () => void;
    value: string;
    isWeatherDataLoading: boolean;
}

const defaultProps: WeatherSearchProps = {
    weatherData: {},
    onChangeText: () => '',
    onPressButton: () => { },
    value: '',
    isWeatherDataLoading: false,
};

const WeatherSearchContainer = (props: WeatherSearchProps) => {
    return (
        <SafeAreaView>
            {/* reusable header component */}
            <HeaderComponent
                title={CONSTANTS.TITLE}
            />
            {/* reusable search component */}
            <SearchComponent
                onChangeText={(text) => props.onChangeText(text)}
                onPressButton={() => props.onPressButton()}
                value={props.value}
                isWeatherDataLoading={props.isWeatherDataLoading}
            />
            {/* component which would render the list of weather data */}
            <WeatherList weatherData={props.weatherData} />
        </SafeAreaView>
    );
};

WeatherSearchContainer.defaultProps = defaultProps;

export default WeatherSearchContainer;
