import * as actions from '@Actions/homeActions';

const initialState = {
  users: [],
};

export default function createHomePageReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case actions.HOME_PAGE_USERS_LIST_SET:
      return { ...state, users: payload.users };
    default:
      return { ...state };
  }
}
