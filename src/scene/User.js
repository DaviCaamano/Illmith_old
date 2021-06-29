import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

//css
import './css/User.css'

//apis
import CompletePasswordReset from '../api/CompletePasswordReset';
import CompleteUserRegistration from "../api/CompleteUserRegistration";

//containers
import LoginContainer from '../component/user/login/LoginContainer';
import PasswordResetContainer from '../component/user/passwordReset/PasswordResetContainer';
import RegisterUserContainer from "../component/user/register/RegisterUserContainer";

//contexts
import
{ UserContextConsumer } from '../context/UserContext';
import { AlertConsumer } from '../context/AlertContext';

const User = (props) => {


    const [resetPasswordStage, setResetPasswordStage] = useState(1);
    const [resetPasswordToken, setResetPasswordToken] = useState('');

    return (
        <AlertConsumer>
            {(alert) => (
                <UserContextConsumer>
                    { context => (
                        <>
                            <LoginContainer
                                handleLogout={context.handleLogout}
                                modalVisible={context.loginModalVisible}
                                setModalVisible={context.setLoginModalVisible}
                                setLoginModalVisible={context.setLoginModalVisible}
                                setUserRegistrationModalVisible={context.setUserRegistrationModalVisible}
                                setResetPasswordVisible={context.setResetPasswordVisible}
                                setLoginCookies={context.setLoginCookies}
                                alert={alert.alert}
                            />
                            <RegisterUserContainer
                                modalVisible={context.userRegistrationModalVisible}
                                setModalVisible={context.setUserRegistrationModalVisible}
                                setLoginModalVisible={context.setLoginModalVisible}
                                alert={alert.alert}
                                confirm={alert.confirm}
                            />
                            <PasswordResetContainer
                                modalVisible={context.resetPasswordVisible}
                                setModalVisible={context.setResetPasswordVisible}
                                setResetPasswordVisible={context.setResetPasswordVisible}
                                setLoginModalVisible={context.setLoginModalVisible}
                                stage={resetPasswordStage}
                                token={resetPasswordToken}
                                resetPasswordToken={resetPasswordToken}
                                alert={alert.alert}
                            />
                            <Switch>
                                <Route path="/user/CompleteUserRegistration/:token">
                                    <CompleteUserRegistration setLoginCookies={context.setLoginCookies} />
                                </Route>
                                <Route path="/user/CompletePasswordReset/:token">
                                    <CompletePasswordReset
                                        isLoggedIn={context.isLoggedIn}
                                        setLoginModalVisible={context.setLoginModalVisible}
                                        stage={resetPasswordStage}
                                        setStage={setResetPasswordStage}
                                        setResetPasswordVisible={context.setResetPasswordVisible}
                                        setToken={setResetPasswordToken}
                                        alert={alert.alert}
                                    />
                                </Route>
                            </Switch>
                        </>)
                    }
                </UserContextConsumer>
            )}
        </AlertConsumer>
    )
}

export default User