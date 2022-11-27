import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import * as actionTypes from "../actions/actionTypes";
import { BASE_URL } from "../../config/apiConfig";

function* fetchBreed(action: any): any {
  try {
    const products = yield axios.get(`${BASE_URL}/breeds/list/all`);
    yield put({
      type: actionTypes.FETCH_DASHBOARD_RESPONSE_SUCCESS,
      payload: products.data.message,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_DASHBOARD_RESPONSE_FAILED,
      payload: error,
    });
  }
}

function* fetchSubBreed(action: any): any {
  try {
    const products = yield axios.get(
      `${BASE_URL}/breed/${action.payload}/list`
    );
    yield put({
      type: actionTypes.FETCH_SUB_BREED_SUCCESS,
      payload: products.data.message,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_SUB_BREED_FAILED,
      payload: error,
    });
  }
}

function* fetchBreedImages(action: any): any {
  try {
    const products = yield axios.get(
      `${BASE_URL}/breed/${action.payload}/images`
    );
    yield put({
      type: actionTypes.FETCH_BREED_IMAGES_SUCCESS,
      payload: products.data.message,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_BREED_IMAGES_FAILED,
      payload: error,
    });
  }
}

export default function* dashboardSaga() {
  yield takeLatest(actionTypes.FETCH_DASHBOARD_RESPONSE_REQUEST, fetchBreed);
  yield takeLatest(actionTypes.FETCH_SUB_BREED_REQUEST, fetchSubBreed);
  yield takeLatest(actionTypes.FETCH_BREED_IMAGES_REQUEST, fetchBreedImages);
}
