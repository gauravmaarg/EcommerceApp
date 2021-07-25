import {all ,call} from  "@redux-saga/core/effects";

import { counterSaga} from './app.saga';

export default function* rootSaga(){
    yield all([
        call(counterSaga)
    ]);
}
