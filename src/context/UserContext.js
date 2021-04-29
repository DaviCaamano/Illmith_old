import React, {useState, createContext} from 'react';
import { useDispatch } from 'react-redux';
import {useCookies} from "react-cookie";
import axios from "axios";

//Redux
import { logout } from '../redux/users';
import store from "../redux";

//Data
import codes from '../data/codes'

const { Provider, Consumer} = createContext({});

const UserContextProvider = (props) => {

    const dispatch = useDispatch();
    const [cookies, setCookie, removeCookie] = useCookies(['token'])

    //Modal Visibility
    const [userRegistrationModalVisible, setUserRegistrationModalVisible] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [resetPasswordVisible, setResetPasswordVisible] = useState(false);


    const isLoggedIn = () => {

        const email = store.getState().user.email;
        return email && email !== 'null';
    }

    const raiseLoginModal = () => setLoginModalVisible(true);

    const handleLogout = () => {

        axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + '/users/logout',
            data: { token: cookies.token }
        }).then(resp => {

            removeLoginCookies();
            dispatch(logout());
        }).catch((err) => {

            props.alert(codes.Error.Logout.generic.message)
        })
    }

    const setLoginCookies = (token, tokenExpiration) => {

        //clear existing cookie
        removeCookie('token');

        let expires = new Date(Date.now() + tokenExpiration)
        //replace existing cookies
        setCookie('token', token, { expires });
    }
    const removeLoginCookies = () => {

        //clear existing token cookie
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