import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '@Actions/homeActions';
import * as api from '@Http/api';

export function* initialPageRequested() {
  try {
    const response = yield call(api.getSampleUsers);

    yield put(actions.setUsersList(response.data.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* homePageSagas() {
  yield takeLatest(actions.HOME_PAGE_INITIAL_PAGE_REQUESTED, initialPageRequested);
}
