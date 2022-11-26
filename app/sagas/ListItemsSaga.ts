import { call, put } from "redux-saga/effects";
import AsyncStorage from '@react-native-async-storage/async-storage';

const secureGet = async() => {
    try {
        const jsonValue = await AsyncStorage.getItem('listItems');
        return jsonValue != null ? JSON.parse(jsonValue) : null;   
    } catch(e) {
       alert('Storage error')
    }
}

export default function* ListItemsSaga(action) {
    try {
        const parsedResponse = yield call(secureGet);
        if (parsedResponse) {
            const result = parsedResponse.filter((item) => {
                return item.customerId === action.payload
            })
            yield put({
                type: "GET_LIST_ITEMS_SUCCESS",
                payload: result
            });
        } else {
        }
    } catch (err) {
        alert('Storage error')
    }
}