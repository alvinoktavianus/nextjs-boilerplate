import * as actions from './actions';

const initialState = {
  users: [],
};

export default function createHomeReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case actions.HOME_SAMPLE_BUTTON_CLICKED:
      return { ...state };
    default:
      return { ...state };
  }
}
