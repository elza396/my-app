import React, {useState} from 'react';
import './Header.css';
import logo from '../../icons/logo.png';
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {addRoom} from "../../redux/rooms/actions";
import {useDispatch} from "react-redux";

export function Header(props) {

    const [isOpenedModal, setIsOpenedModal] = useState(false);
    const [room, setRoom] = useState({
        name: '',
        topic: '',
        creator: '',
        date: '',
    })
    const dispatch = useDispatch();

    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <p>Just chat</p>
            <button
                className="header__button"
                onClick={() => setIsOpenedModal(true)}
            >{props.buttonName}</button>

            {isOpenedModal && <ModalWindow
                onClose={() => setIsOpenedModal(false)}
                modalName="Создание комнаты"
                positiveAction={() => dispatch(addRoom({...room}))}
                positiveActionName="Создать"
            >{
                <div className="modal__body">
                    <form action="" className="modal__body__room modal__form">
                        <span>Название комнаты</span>
                        <input type="text"
                               onChange={(e) => setRoom({...room, name: e.target.value})}
                        />
                    </form>
                    <form action="" className="modal__body__topic modal__form">
                        <span>Тема</span>
                        <select name="topic" id=""
                                onChange={(e) => setRoom({...room, topic: e.target.value})}
                        >
                            <option value="communication">Общение</option>
                            <option value="love">Любовь</option>
                            <option value="sex">Секс</option>
                        </select>
                    </form>
                    <form action="" className="modal__body__name modal__form">
                        <span>Ваше имя</span>
                        <input type="text"
                               onChange={(e) => setRoom({...room, creator: e.target.value})}
                        />
                    </form>
                    {}
                </div>
            }</ModalWindow>}
        </div>
    )
}