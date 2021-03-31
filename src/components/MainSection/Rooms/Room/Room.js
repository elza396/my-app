import React from 'react';
import './Room.css';
import {Link} from "react-router-dom";
import {NAV_CHAT} from "../../../../constants/navigation";

export function Room(props) {

    return (
        <div className="room">
            <div className="room__container">
                <p className="room__room">{props.name}</p>
                <p className="room__topic">Тема: {props.topic}</p>
                <p className="room__creator">Создатель: {props.creator}</p>
                <p className="room__date">Дата создания: {props.date}</p>
                <Link to={NAV_CHAT} >
                    <button className="room__button">Присоединиться</button>
                </Link>
            </div>
        </div>
    )
}