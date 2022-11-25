import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CONSTANTS } from '../../utils/Constants';
import WeatherElement from '../../components/WeatherElement';
import styles from './styles';
import { createImageUrl } from '../../utils/utilFunctions';

interface WeatherListProps {
    weatherData: any;
}

const defaultProps: WeatherListProps = {
    weatherData: [],
};

const WeatherList = (props: WeatherListProps) => {
    const [weatherData, setWeatherData] = useState(props.weatherData);

    useEffect(() => {
        setWeatherData(props.weatherData)
    }, [props.weatherData])

    // lazy loading of the image for the large list,
    // image is loaded only after the important details of the list is visible to user
    const endReached = () => {
        let localWeatherData = [];
        weatherData.forEach(element => {
            const data = {
                ...element,
                imageUrl: createImageUrl(element.weather.icon)
            }
            localWeatherData.push(data);
        });
        setWeatherData(localWeatherData);
    }

    // rendering list of weather details
    return (
        <FlatList
            style={styles.flatList}
            keyExtractor={item => item.dt_txt}
            data={weatherData}
            renderItem={({ item }) => <WeatherElement item={item} />}
            onEndReachedThreshold={0.9}
            onEndReached={endReached}
        />
    );
};

WeatherList.defaultProps = defaultProps;

export default WeatherList;
