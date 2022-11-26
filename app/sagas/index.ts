import * as CONST from '../utils/Constants';
import {takeLatest, all} from 'redux-saga/effects';
import CategoriesSaga from './CategoriesSaga';
import addCategoriesSaga from './AddCategoriesSaga';
import ListItemsSaga from './ListItemsSaga';
import AddListItemSaga from './AddListItemSaga';

export default function* root() {
  yield all([takeLatest("GET_CATEGORIES", CategoriesSaga)]);
  yield all([takeLatest("ADD_CATEGORIES", addCategoriesSaga)]);
  yield all([takeLatest("GET_LIST_ITEMS", ListItemsSaga)]);
  yield all([takeLatest("ADD_LIST_ITEM", AddListItemSaga)]);
}
