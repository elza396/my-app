import React from 'react';
import './Rooms.css';
import {Room} from "./Room/Room";
import {useSelector} from "react-redux";


export function Rooms(props) {

    const rooms = useSelector(state => state.rooms.all);

    return (
        <div className="rooms">
            {rooms.map(r => {
                return (
                    <Room
                        isOpenedChat = {props.isOpenedChat}
                        onClick = {props.onClick}
                        name={r.name}
                        topic={r.topic}
                        creator={r.creator}
                        date={r.date}
                    />
                )
            })}
        </div>
    )
}