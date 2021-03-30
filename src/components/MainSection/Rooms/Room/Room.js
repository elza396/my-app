import React from 'react';
import './Room.css';

export function Room(props) {

    return (
        <div className="room">
            <div className="room__container">
                <p className="room__room">{props.name}</p>
                <p className="room__topic">Тема: {props.topic}</p>
                <p className="room__creator">Создатель: {props.creator}</p>
                <p className="room__date">Дата создания: {props.date}</p>
                <button
                    className="room__button"
                    onClick={()=> props.onClick()}
                >Присоединиться</button>
            </div>
        </div>
    )
}