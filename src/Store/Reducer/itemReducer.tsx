//import { Action } from '../Actions/types'
import data from '../../data.json'

const initialState = {
    item:data,
    filterName:"All Items"
}

export interface itemState {
    item:{
        name:String,
        shape:String,
        color:String
    }[],
    filterName:String
}
interface Filter {
    type:String,
    payload: {shape:String[],color:String[]}
}


const filter = (filters:Filter["payload"]):itemState=>{
   let newData:itemState["item"] = data
    let {shape,color} =filters
   let filteredData:itemState["item"] = []
   let filteredTitle:itemState["filterName"]=""
  newData.map((data)=>{
      if(shape.indexOf(data.shape) !== -1 && color.indexOf(data.color) !== -1){
          filteredData.push(data)
      }
  return 0
  })
  if(shape.length === 5 && color.length === 6){
      filteredTitle = "All Items"
  }else if((color.length === 6 && shape.length > 1)||(color.length > 1 && shape.length === 5)){
    filteredTitle = "Multiple Items"
  }else if( shape.length ===5 && color.length === 1){
    filteredTitle = "All red Items"
  }else if( shape.length ===1 && color.length === 6){
    filteredTitle = `All ${shape[0]} item`
  } else if( shape.length > 1 && color.length === 1){
    filteredTitle = `Multiple ${color[0]} items`
  }else if( shape.length === 1 && color.length > 1){
    filteredTitle = `Multiple ${shape[0]} items`
  }else if( shape.length === 1 && color.length === 1){
    filteredTitle = `${color[0]}  ${shape[0]} item`
  }
    return {
        item:filteredData,
        filterName:filteredTitle
    }
}



const itemReducer = (state: itemState=initialState, action: Filter):any => {
    switch (action.type) {
        case "fetch-items": return state
        case "filter-items" : return filter(action.payload)
        default: return state
    }
}

export default itemReducer