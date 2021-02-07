import React from 'react';
import '../../MainSection.css';

export function Room() {
    return (
        <div className="room">
            <div className="room__container">
                <p className="room__name">Первая комната</p>
                <button className="room__button">Присоединиться</button>
            </div>
        </div>
    )
}