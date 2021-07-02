
interface Login {
    type:String,
    payload?: Boolean | {error : Boolean,errorMessage:String}
}
interface Items {
    type:String,
    payload: Array<{}>
}
interface Filter {
    type:String,
    payload: {shape:String[],color:String[]}
}

export type Action = Login | Items | Filter