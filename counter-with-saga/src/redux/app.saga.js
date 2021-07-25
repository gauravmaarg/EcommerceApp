import { takeLatest, delay, put ,call, all} from "@redux-saga/core/effects";

export function* onIncrement(){
    yield console.log('i am incremented');
    yield delay(1000);
    yield put({type: 'INCREMENT_FROM_SAGA'});
} 

export function* onDecrement(){
    yield console.log('i am Decremented');
    yield delay(1000);
    yield put({type: 'DECREMENT_FROM_SAGA'});
}

export function* incrementSaga(){
    yield takeLatest('INCREMENT', onIncrement);
}

export function* decrementSaga(){
    yield takeLatest('DECREMENT', onDecrement);
}

export function* counterSaga(){
    yield all ([
        call(incrementSaga),
        call(decrementSaga),
    ])
}