import { call, put } from "redux-saga/effects";
import * as CONST from '../utils/Constants';
import { secureGet } from "../config/apiInterface";
import { weatherDataSuccess, weatherDataFailed } from "../actions/WeatherActions";
import { getAppKey } from "../config/appConfig";
import { showAlert } from "../utils/utilFunctions";

// handler saga which is calling the API and saving the response in reducer
export default function* weatherForecastSaga(action) {
    try {
        const response = yield call(secureGet, CONST.API_GET_WEATHER_DATA + `?q=${action.payload}&appid=${getAppKey()}`);
        const parsedResponse = yield response.json();
        if (response.status >= 200 && response.status < 300) {
            const successResponse = {
                response: parsedResponse,
                status: response.status,
            };
            yield put(weatherDataSuccess(successResponse));
        } else {
            showAlert(parsedResponse.message);
            yield call(errorHandler, response.status, parsedResponse.message);
        }
    } catch (err) {
        yield call(errorHandler, CONST.SERVER_ERROR_CODE);
    }
}

function* errorHandler(status, errorMessage = CONST.SERVER_ERROR_MESSAGE) {
    const unParsedResponse = {
        response: { message: `${errorMessage}` },
        status,
    };
    yield put(weatherDataFailed(unParsedResponse));
}