import {combineReducers} from "redux";
import {roomsReducer} from "./rooms/reducer";

export const rootReducer = combineReducers({
    rooms: roomsReducer,
})