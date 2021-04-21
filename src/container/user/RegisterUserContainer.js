import React, { useState,  } from 'react';

//Components
import Modal from '../../component/user/Modal';
import RegisterUserModal from '../../component/user/RegisterUserModal';
import codes, {getCode} from "../../data/codes";


const RegisterUserContainer = (props) => {

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
        props.setUser('');
        props.setEmail('');
        props.setPassword('');
        props.setSubscription(false);
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
        props.setEmail(email);
    }
    const handleUserInputChange = (e) => props.setUser(e.target.value);
    const handlePasswordInputChange = (e) => {

        const password = e.target.value;
        validatePassword(password)
        props.setPassword(password);

    }
    const handleSubscribeCheck = (e) => props.setSubscription(e.target.checked);

    const handleUserRegistration = (event) => {

        event.preventDefault();
        const passwordValidated = passwordIsValidated(passwordValidation);
        if(validateEmail(props.email) && validateUsername(props.user) && passwordValidated){

            props.handleUserRegistration().then((resp) => {

                console.log('resp');
                console.log(resp);
                resetRegisterUserModal();
                hideUserRegistrationModal();
            }).catch((err) => {

                console.log('err');
                console.log(err);
                setWarning(getCode(err.code).message)

                /***************
                 *
                 * PLACE REDUX DISPATCH FOR RAISING AN ALERT
                 */
            })
        } else {
            if(!passwordValidated)
                setWarning(codes.Error.UserRegistration.invalidPassword.message);
        }
    }

    return (
        <>
            <Modal visible={ props.modalVisible } modalHeight={'900px'}>
                <RegisterUserModal
                    submit={ handleUserRegistration }
                    email={ props.email }
                    handleEmailInputChange={ handleEmailInputChange }
                    user={ props.user }
                    handleUserInputChange={ handleUserInputChange }
                    password={ props.password }
                    handlePasswordInputChange={ handlePasswordInputChange }
                    hideModal={ hideUserRegistrationModal }
                    subscribe={ props.subscribe }
                    handleSubscribeCheck={ handleSubscribeCheck }
                    swapToLogin={ swapToLogin }
                    warning={ warning }
                    emailWarning={ emailWarning }
                    usernameWarning={ usernameWarning }
                    passwordValidation={ passwordValidation }
                />
            </Modal>
        </>
    )
}


export default RegisterUserContainer;