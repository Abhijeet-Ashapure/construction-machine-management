import * as CONST from '../utils/Constants';
import {takeLatest, all} from 'redux-saga/effects';
import CategoriesSaga from './CategoriesSaga';
import addCategoriesSaga from './AddCategoriesSaga';

export default function* root() {
  yield all([takeLatest("GET_CATEGORIES", CategoriesSaga)]);
  yield all([takeLatest("ADD_CATEGORIES", addCategoriesSaga)]);
}
