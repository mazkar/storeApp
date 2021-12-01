import {all} from 'redux-saga/effects';

import {SagaHomeWorker} from '../Screen/Home/Reducer/HomeSaga';

export function* allSaga() {
  yield all([SagaHomeWorker()]);
}
