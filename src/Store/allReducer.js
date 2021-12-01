import {combineReducers} from 'redux';

import {HomeReducer} from '../Screen/Home/Reducer/HomeReducer';
import {GlobalReducer} from './GlobalReducer';

export const allReducer = combineReducers({
  HomeReducer,
  GlobalReducer,
});
