import React, {useState} from 'react';
import './Room.css';
import {ModalWindow} from "../../../ModalWindow/ModalWindow";
import {addRoom} from "../../../../redux/rooms/actions";
import {useDispatch} from "react-redux";

export function Room(props) {

    const [isOpenedModal, setIsOpenedModal] = useState(false);
    const [room, setRoom] = useState({
        name: '',
        topic: '',
        creator: '',
        date: '',
    })
    const dispatch = useDispatch();


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
            {isOpenedModal && <ModalWindow
                onClose={() => setIsOpenedModal(false)}
                modalName="Присоединиться к комнате"
                positiveAction={() => dispatch(addRoom(room))}
                positiveActionName="Присоединиться"
            >
                {
                    <form
                        className="modal__body"
                        onSubmit={(e) => {
                            alert("dflgkh");
                            e.preventDefault();
                            dispatch(addRoom(room));
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
                                <option value="communication">Общение</option>
                                <option value="love">Любовь</option>
                                <option value="sex">Секс</option>
                            </select>
                        </div>
                        <div className="modal__body__name modal__form">
                            <span>Ваше имя</span>
                            <input type="text"
                                   onChange={(e) => setRoom({...room, creator: e.target.value})}
                            />
                        </div>
                    </form>
                }
            </ModalWindow>}
        </div>
    )
}