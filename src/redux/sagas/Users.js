import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Action Types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action Creators
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = error => ({ type: FETCH_USERS_FAILURE, payload: error });

// Saga to fetch users
function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

// Watcher Saga
function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}

export default watchFetchUsers;
