import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import codes from "../../data/codes";
const CompletePasswordReset = (props) => {

    const { token } = useParams();

    const sendPasswordResetToken = () => {

        if(props.isLoggedIn()){

            props.alert(codes.Error.ResetPassword.logoutRequired.message)
        }
        else {


            props.setLoginModalVisible(false);
            props.setUserRegistrationModalVisible(false);
            props.setStage(2);
            props.setToken(token);
            props.setResetPasswordVisible(true);
        }
    }
    // eslint-disable-next-line
    useEffect(sendPasswordResetToken, []);

    const { stage, setResetPasswordVisible } = props;

    const hideModal = () => { setResetPasswordVisible(true); }
    useEffect(hideModal, [stage, setResetPasswordVisible]);

    return <div style={{backGround: 'black', width: '100%', height: '100%', position: 'absolute'}}>HURR</div>
}

export default CompletePasswordReset;