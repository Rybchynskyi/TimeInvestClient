const defaultState = {
    currentUser: null,
    users: [],
}

const ADD_CURRENT_USER = "ADD_CURRENT_USER";
const LOGOUT_USER = "LOGOUT_USER";
const ADD_MANY_USERS = "ADD_MANY_USERS";

export const usersReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_CURRENT_USER:
            return {...state, currentUser: action.payload}
        case LOGOUT_USER:
            return {...state, currentUser: null}
        case ADD_MANY_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        default:
            return state
    }
}

export const addManyUsersAction = (payload) => ({type: ADD_MANY_USERS, payload})
export const logoutUserAction = (payload) => ({type: LOGOUT_USER, payload})
export const addCurrentUserAction = (payload) => ({type: ADD_CURRENT_USER, payload})
