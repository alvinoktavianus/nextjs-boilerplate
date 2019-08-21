import { call, put } from 'redux-saga/effects';
import { initialize } from 'redux-form';

import * as commonActions from '@Actions/commonActions';
import * as actions from '@Actions/userActions';
import * as formConstant from '@Constants/form';
import * as api from '@Http/api';

// eslint-disable-next-line import/prefer-default-export
export function* initialPageRequestedEffect(req) {
  try {
    const response = yield call(api.getSampleUserById, req.payload.userId);

    yield put(actions.setUserById(response.data.data));
    yield put(initialize(formConstant.USER_FORM_NAME, {
      emailAddress: response.data.data.email,
    }));
    yield put(commonActions.setLoadingPage(false));
  } catch (e) {
    console.log(e);
  }
}
