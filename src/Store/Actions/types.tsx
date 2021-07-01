
interface Login {
    type:String,
    payload?: Boolean | {error : Boolean,errorMessage:String}
}
interface Items {
    type:String,
    payload: Array<{}>
}

export type Action = Login | Items