import {Dispatch} from 'redux'
import { Action } from './types'

type Credential = { username: String, password: String }

export const Login = (credentials: Credential)=> {
    if (credentials.username === "user" && credentials.password === "password") {
        return (dispatch : Dispatch<Action>)=> {
            dispatch({
            type: "login",
            payload: true
        })
        }
    }  return (dispatch : Dispatch<Action>)=> {
        dispatch({
        type: "login",
        payload: {error: true,errorMessage:"Login credentials is Incorrect"}
    })
    }
}
export const Logout = ()=> {
    return (dispatch : Dispatch<Action>)=> {
        dispatch({
        type: "logout"
    })
}
}
export const fetchUser = ()=> {
    return (dispatch : Dispatch<Action>)=> {
        dispatch({
        type: "fetchUser"
    })
}
}

export const LoadItems = (items : Array<{}>)=> {
    return (dispatch : Dispatch<Action>)=> {
        dispatch({
        type: "load-item",
        payload:items
    })
}
}

export const FetchItems = ()=> {
    return (dispatch : Dispatch<Action>)=> {
        dispatch({
        type: "fetch-items",
    })
}
}


