import { ADD_CONTACT } from '../actions/addContact';


function contactReducer(state = "", action)
{
    switch(action.type){
        case ADD_CONTACT:
            return action.payload.contacts;
        default: 
            return state
    }
}

export default contactReducer;