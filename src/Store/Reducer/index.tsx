import {combineReducers} from 'redux'
import userReducer from './userReducer'

const reducer = combineReducers({
user : userReducer
})
export type State = ReturnType<typeof reducer>
export default reducer