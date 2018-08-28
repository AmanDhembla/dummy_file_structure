import {combineReducers} from 'redux';
import itemReducer from "./itemReducer";
import pathReducer from "./pathReducer";

export default combineReducers({
  items: itemReducer,
  current_path: pathReducer
})
