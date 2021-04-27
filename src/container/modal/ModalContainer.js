import React, {useState} from 'react';

//components
import Modal from '../../component/modal/Modal'

//css
import '../../css/Modal.css'

const ModalContainer = (props) => {

    let modalSize = {};
    if(props.modalSize) modalSize = props.modalSize;
    else {

        if(props.height) modalSize.height = props.height;
        if(props.width) modalSize.width = props.width;
        if(props.maxHeight) modalSize.maxHeight = props.maxHeight;
        if(props.maxWidth) modalSize.maxWidth = props.maxWidth;
        if(props.minHeight) modalSize.minHeight = props.minHeight;
        if(props.minWidth) modalSize.minWidth = props.minWidth;
    }

    const transitionFuncs = {};
    if(props.onEnter) transitionFuncs.onEnter = props.onEnter;
    if(props.onExit) transitionFuncs.onExit = props.onExit;

    return (
        <Modal
            visible={props.visible}
            setVisible={props.setVisible}
            modalSize={modalSize}
            {...transitionFuncs}
        >
            {props.children}
        </Modal>
    )
}

export default ModalContainer;