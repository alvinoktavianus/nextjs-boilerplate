import { takeLatest } from 'redux-saga/effects';

import * as HomeActions from '@Actions/homeActions';
import * as UserActions from '@Actions/userActions';

import * as HomeSagas from './homeSagas';
import * as UserSagas from './userSagas';

export default function* applicationSagas() {
  yield takeLatest(
    HomeActions.HOME_PAGE_INITIAL_PAGE_REQUESTED,
    HomeSagas.initialPageRequestedEffect,
  );

  yield takeLatest(
    UserActions.USER_PAGE_INITIAL_PAGE_REQUESTED,
    UserSagas.initialPageRequestedEffect,
  );
}
