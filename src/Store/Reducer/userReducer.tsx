import { Action } from '../Actions/types'
type User = { isLoggedIn: Boolean }



const userReducer = (state: User = { isLoggedIn: false }, action: Action):User | any => {
    switch (action.type) {
        case "login": return {
            isLoggedIn: action.payload
        }
        case "logout" : return {
            isLoggedIn:false
        }
        default: return state
    }
}

export default userReducer