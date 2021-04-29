import React, {useState, useRef, useEffect} from 'react';
import axios from "axios";

//Containers
import ModalContainer from '../modal/ModalContainer';

//Components
import RegisterUserModal from '../../component/user/RegisterUserModal';

import codes from "../../data/codes";


// input.setCustomValidity('');
// input.reportValidity();
const RegisterUserContainer = (props) => {

    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

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
        const passwordValidated = passwordIsValidated(passwordValidation),
                emailValidated = validateEmail(email),
                usernameValidated = validateUsername(username);
        if(emailValidated && usernameValidated && passwordValidated){

            setWarning(null);
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

                resetRegisterUserModal();
                hideUserRegistrationModal();
            })
            .catch((err) => {

                if(err.response.status === 429){

                    setWarning(codes.Error.Login.tooManyAttempts.message)
                } else {

                    const data = err.response.data,
                        //error object for email in use.
                        emailInUseError = codes.Error.UserRegistration.emailInUse,
                        //error object for username in use.
                        usernameInUseError = codes.Error.UserRegistration.usernameInUse;

                    //Email already in use error
                    if(data && data.code === emailInUseError.code)
                        setEmailWarning(emailInUseError.message)
                    //Username already in use error
                    else if(data && data.code === usernameInUseError.code)
                        setUsernameWarning(usernameInUseError.message)
                    //Error is returned by response
                    else if(data && data.message)
                        setWarning(data.message)
                    //Generic Error
                    else
                        setWarning(codes.Error.UserRegistration.generic.message)
                }
            })
        } else {
            if(!passwordValidated) {

                setWarning(codes.Error.UserRegistration.invalidPassword.message);
            }
            else {

                setWarning('');
            }
        }
    }

    //Clear warnings when reopening login.
    // eslint-disable-next-line
    useEffect(() => {

        setWarning('');
        setEmailWarning('');
        setUsernameWarning('');
    }, [props.modalVisible])

    const onBackdropClick = () => {

        if(username || email || password) {
            props.confirm(
                'Are you sure you want to exit the user registration?',
                () => {
                    props.setModalVisible(false)
                },
                () => {
                }
            );
            return false;
        }
        return true;
    }
    return (
        <>
            <ModalContainer
                visible={ props.modalVisible }
                setVisible={props.setModalVisible}
                width={'700px'}
                onBackdropClick={onBackdropClick}
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
                    emailRef={emailRef}
                    usernameRef={usernameRef}
                    passwordRef={passwordRef}
                />
            </ModalContainer>
        </>
    )
}


export default RegisterUserContainer;