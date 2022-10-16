import {combineReducers} from 'redux';
import home from './home';
import detailMovie from './detailMovie';
import detailPerson from './detailPerson';

const reducers = combineReducers({
  home,
  detailMovie,
  detailPerson,
});

export default reducers;
