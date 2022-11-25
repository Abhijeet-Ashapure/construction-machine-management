// API ACTION TYPES
export const WEATHER_FORECAST_REQUEST = 'WEATHER_FORECAST_REQUEST';
export const WEATHER_FORECAST_SUCCESS = 'WEATHER_FORECAST_SUCCESS';
export const WEATHER_FORECAST_FAILURE = 'WEATHER_FORECAST_FAILURE';

// WeatherSearch Screen
export const CONSTANTS = {
    TITLE: 'Weather Search',
    button: 'Search',
    lengthAlert: 'Please enter city name',
}

export const RECENT_TIME = '21:00:00';

// API Endpoints
export const API_GET_WEATHER_DATA = 'data/2.5/forecast';

// API configs
export const requestTimeout = 1000 * 60;
export const requestTimeoutMessage = 'The request timed out';
export const SERVER_ERROR_MESSAGE = 'Internal server error, please try again after sometime.';
export const SERVER_ERROR_CODE = '500';