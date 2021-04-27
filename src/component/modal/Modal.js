import React from 'react';
import { CSSTransition } from 'react-transition-group';

//css
import '../../css/Modal.css'

const Modal = (props) => {

    const transitionFuncs = {};
    if(props.onEnter) transitionFuncs.onEnter = props.onEnter;
    if(props.onExit) transitionFuncs.onExit = props.onExit;

    return (
        <div
            className={`modal-container`}
            style={props.modalSize? { ...props.modalSize }: {}}
        >
            <CSSTransition
                in={props.visible}
                unmountOnExit
                timeout={300}
                classNames={'animate'}
                {...transitionFuncs}
            >
                <div className='modal-contents'>
                    <div className="modal">
                        {props.children}
                    </div>
                    <div className="modal-border"/>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Modal;