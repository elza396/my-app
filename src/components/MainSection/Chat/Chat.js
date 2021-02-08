import React, {useEffect, useRef} from 'react';
import './Chat.css';

export function Chat() {
    const messages = [
        {
            text: "Я тебя люблю!",
            name: "Газизова Эльза",
            id: 1,
            date: "12:56",
        },
        {
            text: "А я тебя нет!",
            name: "Газизов Салават",
            id: 2,
            date: "12:58",
        },{
            text: "Я тебя люблю!",
            name: "Газизова Эльза",
            id: 1,
            date: "12:56",
        },
        {
            text: "А я тебя нет!",
            name: "Газизов Салават",
            id: 2,
            date: "12:58",
        }
    ];

    const messagesContainerRef = useRef(null);
    useEffect(() => {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }, [messages])


    return (
        <div className="chat">
            <div className="chat__container">
                <div ref={messagesContainerRef} className="chat__messages">
                    {messages.map((el) => {
                        return (
                            <div className="chat__message">
                                <div>
                                    <p className="chat__message__name">{el.name}</p>
                                    <p className="chat__message__text">{el.text}</p>
                                </div>
                                <p className="chat__message__date">{el.date}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="chat__form">
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <button className="chat__button">Отправить</button>
                </div>
            </div>
        </div>
    )
}