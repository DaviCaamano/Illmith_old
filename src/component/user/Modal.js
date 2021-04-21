import React from 'react';
import { CSSTransition } from 'react-transition-group';

//css
import '../../css/Modal.css'

const Modal = (props) => {

    return (
        <div
            className={`modal-container ${!props.visible? 'd-none': ''}`}
            style={props.modalHeight? {height: props.modalHeight}: {}}
        >
            <CSSTransition
                in={props.visible}
                unmountOnExit
                timeout={1000}
                classNames={'animate'}
            >
                <div className="modal">
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    )
}

export default Modal;