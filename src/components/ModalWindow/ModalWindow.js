import React from 'react';
import ReactDOM from 'react-dom';
import './ModalWindow.css';
import close from './../../icons/close.svg';


export function ModalWindow(props) {

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__container">
                <div className="modal__header modal__form">
                    <p>{props.modalName}</p>
                    <img src={close}
                         alt="close"
                         onClick={props.onClose}
                    />
                </div>
                <button className="modal__button"
                        onClick={() => {
                            props.positiveAction();
                            props.onClose();
                        }}
                >{props.positiveActionName}</button>
                {props.children}
            </div>
        </div>, document.body
    )
}