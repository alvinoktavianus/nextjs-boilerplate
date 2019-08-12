import * as actions from '@Actions/userActions';

const initialState = {
  user: {},
};

export default function createUserPageReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case actions.USER_PAGE_USER_BY_ID_SET:
      return { ...state, user: payload.user };
    default:
      return { ...state };
  }
}
