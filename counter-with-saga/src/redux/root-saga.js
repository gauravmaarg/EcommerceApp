import {all ,call} from  "@redux-saga/core/effects";

import { incrementSaga , decrementSaga} from './app.saga';

export default function* rootSaga(){
    yield all([
        call(incrementSaga),
        call(decrementSaga),
    ]);
}
