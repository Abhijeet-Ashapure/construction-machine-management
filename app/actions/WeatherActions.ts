import * as CONST from '../utils/Constants';

// action creator returing the action object for API REQUEST
export default function getWeatherData(city) {
    return {
        type: CONST.WEATHER_FORECAST_REQUEST,
        payload: city,
    };
}

// action creator returing the action object if api response is successful
export function weatherDataSuccess(data) {
    return {
        type: CONST.WEATHER_FORECAST_SUCCESS,
        payload: data,
    };
}

// action creator returing the action object if api response is failed
export function weatherDataFailed(data) {
    return {
        type: CONST.WEATHER_FORECAST_FAILURE,
        payload: data,
    };
}
