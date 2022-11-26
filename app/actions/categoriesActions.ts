import * as CONST from '../utils/Constants';

export default function getCategories() {
    return {
        type: "GET_CATEGORIES",
    };
} 

export function addCategories(data) {
    return {
        type: "ADD_CATEGORIES",
        payload: data
    };
} 