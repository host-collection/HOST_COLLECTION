import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loadingReducer from './loading';
import generalReducer from './general';
import authReducer from './auth';

const rootReducer = combineReducers({
  loading: loadingReducer,
  form: formReducer,
  general: generalReducer,
  auth: authReducer
});

export default rootReducer;
