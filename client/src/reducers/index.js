import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loadingReducer from './loading';
import generalReducer from './general';

const rootReducer = combineReducers({
  loading: loadingReducer,
  form: formReducer,
  general: generalReducer
});

export default rootReducer;
