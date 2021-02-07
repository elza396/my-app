import React from 'react';
import './Header.css';
import logo from '../../icons/logo.png';

export function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <p>Just chat</p>
            <button className="header__button">Создать комнату</button>
        </div>
        )
}