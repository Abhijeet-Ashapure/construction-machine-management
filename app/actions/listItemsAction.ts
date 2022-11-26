import * as CONST from '../utils/Constants';

export default function getListItems(categoryId) {
    return {
        type: "GET_LIST_ITEMS",
        payload: categoryId
    };
} 

export function addListItems(data) {
    return {
        type: "ADD_LIST_ITEM",
        payload: data
    };
} 