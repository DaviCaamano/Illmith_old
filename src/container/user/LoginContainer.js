import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

//Components
import ModalContainer from '../../container/modal/ModalContainer';
import LoginModal from '../../component/user/LoginModal';

import {getCode} from '../../data/codes'
import axios from "axios";

const LoginUserContainer = (props) => {

    const history = useHistory()

    const [warning, setWarning] = useState('');
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const hideLoginModal = () => props.setLoginModalVisible(false);

    const swapToRegistration = () => {

        props.setLoginModalVisible(false);
        props.setUserRegistrationModalVisible(true)
    }

    const swapToResetPassword = () => {

        props.setLoginModalVisible(false);
        props.setResetPasswordVisible(true)
    }

    const handleUserInputChange = (e) => setLoginUser(e.target.value);

    const handlePasswordInputChange = (e) => setLoginPassword(e.target.value);

    const handleRememberCheck = (e) => setRemember(e.target.checked);

    const handleLogin = (event) => {

        console.log(0)
        event.preventDefault();

        axios({
            method:'post',
            url: process.env.REACT_APP_API_URL + '/users/login',
            data: {
                user: loginUser,
                password: loginPassword,
                remember
            }
        }).then(resp => {

            let data = resp.data;
            console.log(1)
            console.log(props.setLoginCookies);
            props.setLoginCookies(data.email, data.userId, data.username, data.token, data.tokenExpiration);

            props.setLoginModalVisible(false)

            history.push('/');
        }).catch((err) => {

            console.log(2)
            if(err && err.response && err.response.data){

                //Invalid Login Information
                if(err.response.data.code){
                    setWarning(getCode(err.response.data.code).message)
                }
            } else {
                setWarning(getCode('NA_LOGIN').message);
            }
        })
    }

    return (
        <>
            <ModalContainer
                visible={props.modalVisible}
                width={'700px'}
            >
                <LoginModal
                    submit={ handleLogin }
                    warning={warning}
                    username={ loginUser }
                    handleUserInputChange={ handleUserInputChange }
                    password={ loginPassword }
                    handlePasswordInputChange={ handlePasswordInputChange }
                    hideModal={ hideLoginModal }
                    remember={ remember }
                    handleRememberCheck={ handleRememberCheck }
                    swapToRegistration={swapToRegistration}
                    swapToResetPassword={swapToResetPassword}
                />
            </ModalContainer>
        </>
    )
}

export default LoginUserContainer;