import {combineReducers} from 'redux'
import itemReducer from './itemReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
user : userReducer,
items: itemReducer
})
export type State = ReturnType<typeof reducer>
export default reducer