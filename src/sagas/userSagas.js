import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '@Actions/userActions';
import * as api from '@Http/api';

export function* initialPageRequestedEffect(req) {
  try {
    const response = yield call(api.getSampleUserById, req.payload.userId);

    yield put(actions.setUserById(response.data.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* userPageSagas() {
  yield takeLatest(actions.USER_PAGE_INITIAL_PAGE_REQUESTED, initialPageRequestedEffect);
}
