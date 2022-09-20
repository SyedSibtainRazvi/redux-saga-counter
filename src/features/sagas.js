import { delay } from "redux-saga/effects";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { INCREMENT, DECREMENT, INCREMENT_ASYNC, } from './reducers';

function* hello() {
    console.log("Hello!");
    yield 1
}

function* incrementAync() {
    yield put({ type: DECREMENT });
    yield call(delay, 1000);
    yield put({ type: INCREMENT });
    yield call(delay, 1000);
    yield put({ type: INCREMENT });
}


function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAync);
}

export function* rootSagas() {
    yield all([
        hello(),
        watchIncrementAsync(),
    ]);
}