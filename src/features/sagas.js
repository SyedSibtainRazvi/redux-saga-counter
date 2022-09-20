import { put, takeEvery, all, call } from "redux-saga/effects";
import { INCREMENT, INCREMENT_ASYNC, } from './reducers';


function* helloSaga() {
    console.log("Hello!");
    yield 1
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))


function* onIncrementAync() {
    yield call(delay, 1000);
    yield put({ type: INCREMENT });
}


function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, onIncrementAync);
}

export function* rootSagas() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
    ]);
}