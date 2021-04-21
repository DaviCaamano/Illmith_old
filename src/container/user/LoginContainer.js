import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

//Components
import Modal from '../../component/user/Modal';
import LoginModal from '../../component/user/LoginModal';

import {getCode} from '../../data/codes'

const LoginUserContainer = (props) => {

    const history = useHistory()
    const [warning, setWarning] = useState('');
    const hideLoginModal = () => props.setLoginModalVisible(false);
    const swapToRegistration = () => {

        props.setLoginModalVisible(false);
        props.setUserRegistrationModalVisible(true)
    }
    const handleUserInputChange = (e) => props.setUser(e.target.value);
    const handlePasswordInputChange = (e) => props.setPassword(e.target.value);
    const handleRememberCheck = (e) => props.setRemember(e.target.checked);

    const handleLogin = (event) => {

        event.preventDefault();

        props.handleLogin().then(() => {

            props.setLoginModalVisible(false)
            history.push('/');
        }).catch((err) => {

                if(err && err.response && err.response.data){

                    //Invalid Login Information
                    if(err.response.data.code){
                        setWarning(getCode(err.response.data.code).message)
                    }
                } else {
                    setWarning(getCode('NA_LOGIN').message);
                }
            }
        )
    }


    return (
        <>
            <Modal visible={props.modalVisible}>
                <LoginModal
                    submit={ handleLogin }
                    warning={warning}
                    user={ props.user }
                    handleUserInputChange={ handleUserInputChange }
                    password={ props.password }
                    handlePasswordInputChange={ handlePasswordInputChange }
                    hideModal={ hideLoginModal }
                    remember={ props.remember }
                    handleRememberCheck={ handleRememberCheck }
                    swapToRegistration={swapToRegistration}
                />
            </Modal>
        </>
    )
}

export default LoginUserContainer;