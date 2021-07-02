import { Action } from '../Actions/types'
import data from '../../data.json'

const initialState = {
    item:data,
    shapeFilter:["oval"],
    colorFilter:["red"]
}

export interface itemState {
    item:{
        name:String,
        shape:String,
        color:String
    }[],
    shapeFilter:String[],
    colorFilter:String[]
}

const itemReducer = (state: itemState=initialState, action: Action) => {
    switch (action.type) {
        case "fetch-items": return state
        default: return state
    }
}

export default itemReducer