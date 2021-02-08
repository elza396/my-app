import React from 'react';
import './MainSection.css';
import {Rooms} from "./Rooms/Rooms";
import {Chat} from "./Chat/Chat";
import {ModalWindow} from "../ModalWindow/ModalWindow";

export function MainSection() {
    return (
        <div className="main_section">
            {/*<Chat />*/}
            <Rooms />
            <ModalWindow />
        </div>
    )
}