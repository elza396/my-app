import {DEC, INC} from "./action-types";

const initialState = 0;

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case (DEC): return state - 1;
        case (INC): return state + 1;
        default: return state;
    }
}