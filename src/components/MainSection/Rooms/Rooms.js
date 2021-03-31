import React from 'react';
import './Rooms.css';
import {Room} from "./Room/Room";
import {useSelector} from "react-redux";


export function Rooms() {

    const rooms = useSelector(state => state.rooms.all);

    return (
        <div className="rooms">
            {rooms.map(r => {
                return (
                    <Room
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