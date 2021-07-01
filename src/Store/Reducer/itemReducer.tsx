import { Action } from '../Actions/types'
import data from '../../data.json'

const initialState = data



const itemReducer = (state: Array<{}>=initialState, action: Action) => {
    switch (action.type) {
        case "fetch-items": return state
        default: return state
    }
}

export default itemReducer