import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import DateHeader from './DateHeader';
import CustomText from './CustomText';
import CommonStyles from '../../utils/CommonStyles';
import Loader from './Loader';
import CustomImage from './CustomImage';

interface WeatherElementProps {
    item: any
}

const defaultProps: WeatherElementProps = {
    item: {}
};

const WeatherElementComponent = (props: WeatherElementProps) => {
    return (
        <View>
            <DateHeader date={props.item.dt_txt} />
            <View style={[CommonStyles.row, styles.weatherContainer]}>
                <View style={styles.weatherData}>
                    <CustomText
                        label={props.item.weather.main}
                        style={styles.titleStyle}
                    />
                    <CustomText
                        label={props.item.weather.description}
                        style={styles.subTitleStyle}
                    />
                </View>
                {
                    props.item.imageUrl !== undefined ?
                    <CustomImage imageUrl={props.item.imageUrl}/>
                    :
                    <Loader />
                }
            </View>
        </View>
    );
};

WeatherElementComponent.defaultProps = defaultProps;

export default WeatherElementComponent;