import { Action } from '../Actions/types'




const itemReducer = (state: Array<{}>, action: Action) => {
    switch (action.type) {
        case "load-item": return {
            items:action.payload
        }
        default: return state
    }
}

export default itemReducer