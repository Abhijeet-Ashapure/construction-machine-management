import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import CommonStyles from '../../utils/CommonStyles';
import WeatherSearchContainer from './WeatherSearchContainer';
import getWeatherData from '../../actions/WeatherActions';
import { CONSTANTS } from '../../utils/Constants';
import { showAlert, isEmpty } from '../../utils/utilFunctions';

const SearchScreen = (props) => {

  // handling the city entered by user 
  const [city, setCity] = useState(''); 

  // saving the value of textinput in the state
  const onChangeSearchText = (city: string) => {
    setCity(city);
  }

  // called when the search button is clicked, checking for empty string
  const onPressSearch = () => {
    if(isEmpty(city)) return showAlert(CONSTANTS.lengthAlert);
    props.fetchWeatherData(city); // method to dispatch the action
  }

  return (
    <View style={CommonStyles.containerTop}>
      {/* container component */}
      <WeatherSearchContainer
        weatherData={props.weatherData}
        isWeatherDataLoading={props.isWeatherDataLoading}
        onChangeText={(text) => onChangeSearchText(text)}
        value={city}
        onPressButton={() => onPressSearch()}
      />
    </View>
  )
};

const mapStateToProps = state => {
  return {
    weatherData: state.weatherForecaseReducer.data,
    isWeatherDataLoading: state.weatherForecaseReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: (city) => dispatch(getWeatherData(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
