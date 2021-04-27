import React, { useState, useEffect  } from 'react';
import axios from "axios";

//Containers
import ModalContainer from '../modal/ModalContainer';

//Components
import RegisterUserModal from '../../component/user/RegisterUserModal';

import codes, {getCode} from "../../data/codes";

const RegisterUserContainer = (props) => {

    const [username, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subscribe, setSubscription] = useState(false);
    
    //Warnings to be displayed on Modal
    const [warning, setWarning] = useState('')
    const [emailWarning, setEmailWarning] = useState('')
    const [usernameWarning, setUsernameWarning] = useState('')
    const [passwordValidation, setPasswordValidation] = useState({
        hasSixCharacters: false,
        hasCorrectCase: false,
        hasNumber: false,
    })

    const resetRegisterUserModal = () => {

        setWarning('');
        setEmailWarning('');
        setUsernameWarning('');
        setPasswordValidation({
            hasSixCharacters: false,
            hasCorrectCase: false,
            hasNumber: false,
        });
        setUser('');
        setEmail('');
        setPassword('');
        setSubscription(false);
    }

    const validatePassword = (password) => {

        const hasEnoughLetters = (new RegExp("(?=.{6,})")).test(password);
        const hasNumber = (new RegExp("(?=.*[0-9])")).test(password);
        const hasLowercase = (new RegExp("(?=.*[a-z])")).test(password);
        const hasUppercase = (new RegExp("(?=.*[A-Z])")).test(password);

        const report = {
            hasSixCharacters: hasEnoughLetters,
            hasCorrectCase: hasLowercase && hasUppercase,
            hasNumber: hasNumber,
        }
        setPasswordValidation(report);
        return report;
    }

    const validateEmail = (email) => {


        const test = (/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/).test( email );
        setEmailWarning(test? '': codes.Error.UserRegistration.invalidEmail.message);
        return test;
    }

    const validateUsername = (username) => {

        if(!username) return true;
        let test = new RegExp(/[A-Za-z0-9_]+/).test(username);
        setUsernameWarning(test? '': codes.Error.UserRegistration.invalidUsername.message);
        return test;
    }

    const passwordIsValidated = (validations = passwordValidation) =>
        validations.hasSixCharacters
        && validations.hasCorrectCase
        && validations.hasNumber;

    const hideUserRegistrationModal = () => props.setUserRegistrationModalVisible(false);

    const swapToLogin = () => {

        props.setUserRegistrationModalVisible(false)
        props.setLoginModalVisible(true);
    }
  
    const handleEmailInputChange = (e) => {

        const email = e.target.value;
        setEmail(email);
    }
  
    const handleUserInputChange = (e) => setUser(e.target.value);
 
    const handlePasswordInputChange = (e) => {

        const password = e.target.value;
        validatePassword(password)
        setPassword(password);

    }

    const handleSubscribeCheck = (e) => setSubscription(e.target.checked);

    const handleUserRegistration = (event) => {

        event.preventDefault();
        const passwordValidated = passwordIsValidated(passwordValidation);
        if(validateEmail(email) && validateUsername(username) && passwordValidated){

            axios({
                method:'post',
                url: process.env.REACT_APP_API_URL + '/users/validateRegistration',
                data: {
                    username,
                    email,
                    password,
                    subscribe
                }
            })                
            .then((resp) => {

                console.log('resp');
                console.log(resp.data);
                resetRegisterUserModal();
                hideUserRegistrationModal();
            })
            .catch((err) => {

                console.log('err');
                console.log(err);
                if(err.response.data && err.response.data.code)
                    props.alert(getCode(err.response.data.code).message)
                else
                    props.alert(getCode('NA_UREG').message)
            })
        } else {
            if(!passwordValidated)
                setWarning(codes.Error.UserRegistration.invalidPassword.message);
        }
    }

    return (
        <>
            <ModalContainer
                visible={ props.modalVisible }
                width={'700px'}
            >
                <RegisterUserModal
                    submit={ handleUserRegistration }
                    email={ email }
                    handleEmailInputChange={ handleEmailInputChange }
                    username={ username }
                    handleUserInputChange={ handleUserInputChange }
                    password={ password }
                    handlePasswordInputChange={ handlePasswordInputChange }
                    hideModal={ hideUserRegistrationModal }
                    subscribe={ subscribe }
                    handleSubscribeCheck={ handleSubscribeCheck }
                    swapToLogin={ swapToLogin }
                    warning={ warning }
                    emailWarning={ emailWarning }
                    usernameWarning={ usernameWarning }
                    passwordValidation={ passwordValidation }
                />
            </ModalContainer>
        </>
    )
}


export default RegisterUserContainer;