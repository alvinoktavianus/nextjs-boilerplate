import { combineReducers } from 'redux';

import HomeReducer from 'pages/home/reducer';

export default combineReducers({
  home: HomeReducer,
});
