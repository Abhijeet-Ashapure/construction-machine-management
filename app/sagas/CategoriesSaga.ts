import { call, put } from "redux-saga/effects";
import AsyncStorage from '@react-native-async-storage/async-storage';

const secureGet = async() => {
    try {
        const jsonValue = await AsyncStorage.getItem('categories');
        return jsonValue != null ? JSON.parse(jsonValue) : null;   
    } catch(e) {
       alert('Storage error')
    }
}

export default function* getCategoriesSaga(action) {
    try {
        const parsedResponse = yield call(secureGet);
        if (parsedResponse) {
            yield put({
                type: "GET_CATEGORIES_SUCCESS",
                payload: parsedResponse
            });
        } else {
        }
    } catch (err) {
        alert('Storage error')
    }
}