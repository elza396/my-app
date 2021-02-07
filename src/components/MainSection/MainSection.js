import React from 'react';
import './MainSection.css';
import {Rooms} from "./Rooms/Rooms";
import {Chat} from "./Chat/Chat";

export function MainSection() {
    return (
        <div className="main_section">
            <Chat />
            <Rooms />
        </div>
    )
}