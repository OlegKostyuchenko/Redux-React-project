import { createStore } from 'redux';
import reduser from './reducers';

const store = createStore(reduser)

export default store;