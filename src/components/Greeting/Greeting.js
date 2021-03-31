import React from 'react';
import './Greeting.css';

export function Greeting() {
    return (
        <div className="greeting_container">
            <span>
                Приветствую тебя, мой дорогой друг! Этот чат был создан специально для тебя, здесь ты найдешь с кем пообщаться.
                Создай комнату или присоединись к уже готовой. Дерзай!
            </span>
            <img src="https://callibri.ru/assets/chat_bot/hand_bot-039fc0b9b28d2500c33e568bb0877edde1f448d7600942f7a6cfe3c39d6e9b01.png" alt=""/>
        </div>
    )
}