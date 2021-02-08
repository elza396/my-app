import React from 'react';
import './ModalWindow.css';
import close from './../../icons/close.svg';

export function ModalWindow() {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__header modal__flex">
                    <p>Создание комнаты</p>
                    <img src={close} alt="close"/>
                </div>
                <div className="modal__body">
                    <form action="" className="modal__body__room modal__flex">
                        <span>Название комнаты</span>
                        <input type="text"/>
                    </form>
                    <form action="" className="modal__body__topic modal__flex">
                        <span>Тема</span>
                        <select name="topic" id="">
                            <option value="love">Любовь</option>
                            <option value="sex">Секс</option>
                            <option value="communication">Общение</option>
                        </select>
                    </form>
                    <form action="" className="modal__body__room modal__flex">
                        <span>Ваше имя</span>
                        <input type="text"/>
                    </form>
                </div>
            </div>
        </div>
    )
}