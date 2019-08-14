import { call, put } from 'redux-saga/effects';

import * as actions from '@Actions/homeActions';
import * as api from '@Http/api';

// eslint-disable-next-line import/prefer-default-export
export function* initialPageRequestedEffect() {
  try {
    const response = yield call(api.getSampleUsers);

    yield put(actions.setUsersList(response.data.data));
  } catch (e) {
    console.log(e);
  }
}
