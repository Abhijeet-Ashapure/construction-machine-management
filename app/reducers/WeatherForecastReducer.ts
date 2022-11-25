import * as CONST from '../utils/Constants';

const initialState = {
  data: null,
  error: {},
  isLoading: false,
};

// The reducer will stores the data coming from weather API
export default function weatherForecaseReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.WEATHER_FORECAST_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
      };
    case CONST.WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        data: filterWeatherData(action.payload), // reducers can have logics as long as they are pure
        error: {},
        isLoading: false,
      };
    case CONST.WEATHER_FORECAST_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

// reducers can have logics as long as they are pure
const filterWeatherData = (data) => {
  const list = data.response.list;
  let filteredData = [];

  list.forEach(element => {
    if (element.dt_txt.indexOf(CONST.RECENT_TIME) > -1) { //indexOf() in Chrome works much faster than includes(), in Firefox both indexOf() and includes() works almost similar.
      const weatherItem = {
        dt_txt: element.dt_txt.split(' ')[0],
        weather: element.weather[0]
      }
      filteredData.push(weatherItem);
    }
  }); 
  return filteredData;
}
