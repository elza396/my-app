import {DEC, INC} from "./action-types";


export const increment = () => ({
    type: INC,
})
export const decrement = () => ({
    type: DEC,
})