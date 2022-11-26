import { combineReducers } from "redux";
import categoriesReducer from './categoriesReducer';
import configureStore from '../store';
import rootSaga from '../sagas';

export default () => {
    const rootReducer = combineReducers({
        categoriesReducer,
    });
    return configureStore(rootReducer, rootSaga);
};