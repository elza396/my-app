import {ADD_ROOM, DELETE_ROOM} from "./action-types";

const initialState = {
    all: []
}

export function roomsReducer(state = initialState, action) {
    switch(action.type) {
        case (ADD_ROOM): {
            const newRooms = {...state, all: state.all.slice(0)};
            newRooms.all.push(action.payload);
            return newRooms;
        }
        case (DELETE_ROOM): {
            const newRooms = {...state};
            const index = newRooms.all.findIndex(r => r.id === action.payload);
            newRooms.all.splice(index, 1);
            return newRooms;
        }
        default: return state;
    }
}