import React from 'react';
import './Room.css';

export function Room() {
    return (
        <div className="room">
            <div className="room__container">
                <p className="room__room">Первая комната</p>
                <p className="room__topic">Тема: общение</p>
                <p className="room__name">Создатель: Салаватик</p>
                <p className="room__date">Дата создания: 23.01.21 21:30</p>
                <button className="room__button">Присоединиться</button>
            </div>
        </div>
    )
}