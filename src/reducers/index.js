import HomeReducers from './homeReducers';
import UserReducers from './userReducers';
import CommonReducers from './commonReducers';

const reducers = {
  homePage: HomeReducers,
  userPage: UserReducers,
  common: CommonReducers,
};

export default reducers;
