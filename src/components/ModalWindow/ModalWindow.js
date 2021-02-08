import React from 'react';
import './ModalWindow.css';
import close from './../../icons/close.svg';

export function ModalWindow() {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__header modal__form">
                    <p>Создание комнаты</p>
                    <img src={close} alt="close"/>
                </div>
                <div className="modal__body">
                    <form action="" className="modal__body__room modal__form">
                        <span>Название комнаты</span>
                        <input type="text"/>
                    </form>
                    <form action="" className="modal__body__topic modal__form">
                        <span>Тема</span>
                        <select name="topic" id="">
                            <option value="communication">Общение</option>
                            <option value="love">Любовь</option>
                            <option value="sex">Секс</option>
                        </select>
                    </form>
                    <form action="" className="modal__body__name modal__form">
                        <span>Ваше имя</span>
                        <input type="text"/>
                    </form>
                </div>
                <button className="modal__button">Создать</button>
            </div>
        </div>
    )
}