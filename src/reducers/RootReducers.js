import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

const RootReducers = combineReducers({
    contacts: contactReducer
});



export default RootReducers;