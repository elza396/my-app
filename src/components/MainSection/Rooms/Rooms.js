import React from 'react';
import '../MainSection.css';
import {Room} from "./Room/Room";

export function Rooms() {
    return (
        <div className="rooms">
            <Room />
            <Room />
            <Room />
            <Room />
        </div>
    )
}