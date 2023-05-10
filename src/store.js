import { createStore } from 'redux';
import { formFieldsReducer } from './reducers/formFieldsReducer';

const store = createStore(formFieldsReducer);

export default store;
