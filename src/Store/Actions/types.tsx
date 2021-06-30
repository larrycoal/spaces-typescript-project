
interface Login {
    type:String,
    payload?: Boolean | {error : Boolean,errorMessage:String}
}

export type Action = Login