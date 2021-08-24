// reducer is just a function that gets two properties it gets state object which represent the last state or an initial state write which is just in object represent better is trying to store and then a recieve an action
//action is just in objects

import { UserActionTypes } from "./user.types";

const INITIAL_STATE  = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;