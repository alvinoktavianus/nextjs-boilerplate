import * as actions from '@Actions/commonActions';

const initialState = {
  showLoadingPage: false,
};

export default function createCommonReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case actions.COMMON_ACTIONS_LOADING_PAGE_SET:
      return { ...state, showLoadingPage: payload.status };
    default:
      return { ...state };
  }
}
