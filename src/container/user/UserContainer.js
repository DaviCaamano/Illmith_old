import React from 'react';
import {Switch, Route} from 'react-router-dom';

//containers
import LoginContainer from './LoginContainer';
import RegisterUserContainer from './RegisterUserContainer';
import CompleteUserRegistration from './CompleteUserRegistration';
//controllers
import { UserContextConsumer } from '../../context/UserContext'

//css
import '../../css/Login.css'


const UserContainer = (props) => {

    return <UserContextConsumer>
        { context => (
            <>
                <LoginContainer
                    user={context.loginUser}
                    setUser={context.setLoginUser}
                    password={context.loginPassword}
                    setPassword={context.setLoginPassword}
                    remember={context.remember}
                    setRemember={context.setRemember}
                    handleLogin={context.handleLogin}
                    handleLogout={context.handleLogout}
                    modalVisible={context.loginModalVisible}
                    setLoginModalVisible={context.setLoginModalVisible}
                    setUserRegistrationModalVisible={context.setUserRegistrationModalVisible}
                />
                {/**
                 registeringUser,
                 setRegisteringUser,
                 registeringEmail,
                 setRegisteringEmail,
                 registeringPassword,
                 setRegisteringPassword,
                 subscribe,
                 setSubscription,
                 */}
                <RegisterUserContainer
                    user={context.registeringUser}
                    setUser={context.setRegisteringUser}
                    email={context.registeringEmail}
                    setEmail={context.setRegisteringEmail}
                    password={context.registeringPassword}
                    setPassword={context.setRegisteringPassword}
                    subscribe={context.subscribe}
                    setSubscription={context.setSubscription}
                    handleUserRegistration={context.handleUserRegistration}
                    warning={context.registrationWarning}
                    emailWarning={context.emailWarning}
                    usernameWarning={context.usernameWarning}
                    passwordValidation={context.passwordValidation}
                    validatePassword={context.validatePassword}
                    modalVisible={context.userRegistrationModalVisible}
                    setUserRegistrationModalVisible={context.setUserRegistrationModalVisible}
                    setLoginModalVisible={context.setLoginModalVisible}
                />
                <Switch>
                    <Route path="/user/CompleteUserRegistration/:token">
                        <CompleteUserRegistration
                            setLoginCookies={context.setLoginCookies}
                        />
                    </Route>
                </Switch>
            </>)
        }
    </UserContextConsumer>

}

export default UserContainer