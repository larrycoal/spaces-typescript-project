import { Action } from '../Actions/types'
type User = { isLoggedIn: Boolean }



const userReducer = (state: User = { isLoggedIn: false }, action: Action) => {
    switch (action.type) {
        case "login": return {
            isLoggedIn: action.payload
        }
        case "fetchUser" : return state
        default: return state
    }
}

export default userReducer