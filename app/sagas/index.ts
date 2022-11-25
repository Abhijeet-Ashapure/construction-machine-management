import * as CONST from '../utils/Constants';
import {takeLatest, all} from 'redux-saga/effects';
import weatherForecastSaga from './WeatherForecastSaga';

export default function* root() {
  yield all([takeLatest(CONST.WEATHER_FORECAST_REQUEST, weatherForecastSaga)]);
}
