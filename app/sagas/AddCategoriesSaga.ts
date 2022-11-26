import { call, put } from "redux-saga/effects";
import AsyncStorage from '@react-native-async-storage/async-storage';

const securePost = async(data) => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('categories', jsonValue);
    } catch(e) {
       alert('Storage error')
    }
}

export default function* addCategoriesSaga(action) {
    try {
        yield call(securePost, action.payload)
        yield put({
            type: "ADD_CATEGORIES_SUCCESS",
            payload: action.payload
        });
    } catch (err) {
        alert('Storage error')
    }
}