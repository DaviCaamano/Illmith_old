import React, {useState, createContext} from 'react';
import axios from "axios";
import {useCookies} from "react-cookie";
import {getCode} from '../data/codes'

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

    //Login State
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [remember, setRemember] = useState(false);

    //Register User State
    const [registeringUser, setRegisteringUser] = useState('');
    const [registeringEmail, setRegisteringEmail] = useState('');
    const [registeringPassword, setRegisteringPassword] = useState('');
    const [subscribe, setSubscription] = useState(false);

    const raiseLoginModal = () => setLoginModalVisible(true);

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

    const handleLogin = () => {

        return new Promise((resolve, reject) => {

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
                setLoginCookies(data.email, data.userId, data.username, data.token, data.tokenExpiration);

                resolve(resp);
            }).catch(reject)
        })
    }

    const handleLogout = () => {

        return new Promise((resolve, reject) =>

            axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL + '/users/logout',
                data: { userId: cookies.userId }
            }).then(resp => {

                //clear existing cookies
                removeCookie('username');
                removeCookie('name');
                removeCookie('user_id');
                removeCookie('userId');
                removeCookie('email');
                removeCookie('token');
                resolve(resp)
            }).catch(reject)
        )
    }

    const handleUserRegistration = (props) => {

        return new Promise((resolve, reject) => {

            axios({
                method:'post',
                url: process.env.REACT_APP_API_URL + '/users/validateRegistration',
                data: {
                    username: registeringUser,
                    email: registeringEmail,
                    password: registeringPassword,
                    subscribe
                }
            }).then(resp => {

                resolve(resp.data);
            }).catch((err) => {

                if(err.response.data && err.response.data.code)
                    reject(getCode(err.response.data.code))
                else
                    reject(getCode('NA_UREG'))
            })
        })
    }

    return (
        <Provider value={{
            //Login Contexts
            loginUser,
            setLoginUser,
            loginPassword,
            setLoginPassword,
            remember,
            setRemember,
            handleLogin,
            handleLogout,
            setLoginCookies,
            //Register User Context
            registeringUser,
            setRegisteringUser,
            registeringEmail,
            setRegisteringEmail,
            registeringPassword,
            setRegisteringPassword,
            subscribe,
            setSubscription,
            handleUserRegistration,
            //Modal Visibility
            loginModalVisible,
            setLoginModalVisible,
            userRegistrationModalVisible,
            setUserRegistrationModalVisible,
            raiseLoginModal,
        }}>
            {props.children}
        </Provider>
    )

}

export { UserContextProvider, Consumer as UserContextConsumer };