import React from 'react';
import './Header.css';
import logo from '../../icons/logo.png';
import {useDispatch} from "react-redux";
import {decrement} from "../../redux/counter/actions";

export function Header() {

    const dispatch = useDispatch();

    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <p>Just chat</p>
            <button onClick={() => dispatch(decrement())} className="header__button">Создать комнату</button>
        </div>
    )
}