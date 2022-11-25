import { combineReducers } from "redux";
import weatherForecaseReducer from './WeatherForecastReducer';
import configureStore from '../store';
import rootSaga from '../sagas';

export default () => {
    const rootReducer = combineReducers({
        weatherForecaseReducer,
    });
    return configureStore(rootReducer, rootSaga);
};