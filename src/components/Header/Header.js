import React, {useState} from 'react';
import './Header.css';
import logo from '../../icons/logo.png';
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {addRoom} from "../../redux/rooms/actions";
import {useDispatch} from "react-redux";
import {Link, useHistory, useLocation} from "react-router-dom";
import {NAV_CHAT} from "../../constants/navigation";

export function Header() {
    const [isOpenedModal, setIsOpenedModal] = useState(false);
    const [room, setRoom] = useState({
        name: '',
        topic: 'Общение',
        creator: '',
        date: new Date().toLocaleString(),
    })
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const isOpenedChat = location.pathname === NAV_CHAT;

    return (
        <div className="header">
            <Link to="/" >
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            <p>Just chat</p>
            {isOpenedChat ? <Link to="/rooms" >
                <button className="header__button">Выйти из комнаты</button>
            </Link> :
                <button
                className="header__button"
                onClick={() => {setIsOpenedModal(true)}}
            >Создать комнату</button>}

            {isOpenedModal && <ModalWindow
                onClose={() => {
                    setIsOpenedModal(false);
                    setRoom({
                    name: '',
                    topic: 'Общение',
                    creator: '',
                    date: new Date().toLocaleString(),
                })
                }}
                modalName="Создание комнаты"
                positiveAction={() => {
                    dispatch(addRoom({...room}));
                    history.push(NAV_CHAT);
                }}
                positiveActionName="Создать"
            >
                <div>
                    <form
                        className="modal__body"
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch(addRoom({...room}));
                            setRoom({
                                name: '',
                                topic: 'Общение',
                                creator: '',
                                date: new Date().toLocaleString(),
                            });
                            setIsOpenedModal(false);
                            history.push(NAV_CHAT)
                        }}
                    >
                        <div className="modal__body__room modal__form">
                            <span>Название комнаты</span>
                            <input type="text"
                                   onChange={(e) => setRoom({...room, name: e.target.value})}
                            />
                        </div>
                        <div className="modal__body__topic modal__form">
                            <span>Тема</span>
                            <select name="topic" id=""
                                    onChange={(e) => setRoom({...room, topic: e.target.value})}
                            >
                                <option value="Общение">Общение</option>
                                <option value="Любовь">Любовь</option>
                                <option value="Секс">Секс</option>
                            </select>
                        </div>
                        <div className="modal__body__name modal__form">
                            <span>Ваше имя</span>
                            <input type="text"
                                   onChange={(e) => setRoom({...room, creator: e.target.value})}
                            />
                        </div>
                        <input className="form__hidden" type="submit" />
                    </form>
                </div>
            </ModalWindow>}
        </div>
    )
}