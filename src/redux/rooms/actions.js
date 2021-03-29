import {ADD_ROOM, DELETE_ROOM} from "./action-types";

export const addRoom = (room) => (
    {
        type: ADD_ROOM,
        payload: room
    }
)
export const deleteRoom = id => (
    {
        type: DELETE_ROOM,
        payload: id
    }
)
