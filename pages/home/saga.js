import { takeLatest } from 'redux-saga/effects';

import * as actions from './actions';

function* buttonClicked() {
  console.log('Button clicked');
}

export default function* rootSaga() {
  yield takeLatest(actions.HOME_SAMPLE_BUTTON_CLICKED, buttonClicked);
}
