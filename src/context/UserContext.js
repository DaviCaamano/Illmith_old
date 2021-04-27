import React, {useState, createContext} from 'react';
import axios from "axios";
import {useCookies} from "react-cookie";
import codes, {getCode} from '../data/codes'

const { Provider, Consumer} = createContext({});

const UserContextProvider = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies([
        'username',
        'user_id',
        'email',
        'token'
    ])

    //Modal Visibility
    const [userRegistrationModalVisible, setUserRegistrationModalVisible] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [resetPasswordVisible, setResetPasswordVisible] = useState(false);


    const isLoggedIn = () => cookies.email && cookies.email !== 'null';

    const raiseLoginModal = () => setLoginModalVisible(true);

    const handleLogout = () => {

        axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + '/users/logout',
            data: { userId: cookies.userId }
        }).then(resp => {

            removeLoginCookies();
        }).catch((err) => {

            props.alert(codes.Error.Logout.generic.message)
        })
    }

    const setLoginCookies = (email, userId, username, token, tokenExpiration) => {

        //clear existing cookies
        removeCookie('username');
        removeCookie('userId');
        removeCookie('email');
        removeCookie('token');

        let expires = new Date(Date.now() + tokenExpiration)
        //replace existing cookies
        setCookie('username', username, { expires });
        setCookie('userId', userId, { expires});
        setCookie('email', email, { expires });
        setCookie('token', token, { expires });
    }
    const removeLoginCookies = () => {

        //clear existing cookies
        //clear existing cookies
        removeCookie('username');
        removeCookie('name');
        removeCookie('user_id');
        removeCookie('userId');
        removeCookie('email');
        removeCookie('token');
    }

    return (
        <Provider value={{
            isLoggedIn,
            handleLogout,
            setLoginCookies,
            removeLoginCookies,
            //Modal Visibility
            loginModalVisible,
            setLoginModalVisible,
            userRegistrationModalVisible,
            setUserRegistrationModalVisible,
            raiseLoginModal,
            resetPasswordVisible,
            setResetPasswordVisible,
        }}>
            {props.children}
        </Provider>
    )

}

export { UserContextProvider, Consumer as UserContextConsumer };