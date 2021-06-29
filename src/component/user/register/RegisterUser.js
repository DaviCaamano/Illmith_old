import React from 'react';
import {Link} from "react-router-dom";
import back_button_img from '../../../resources/img/back button.svg';
import alert_img from '../../../resources/img/Exclamation Alert.svg';
import {ReactComponent as CircleCheck} from '../../../resources/img/circle check.svg';

//Components
import InputErrorContainer from "../../../common/inputError/InputErrorContainer";

const RegisterUser = (props) => {

    const bulletStyle = {height: '14px', width: '14px', position: 'relative', bottom: '1px'}
    const passwordBullets = [
        props.passwordValidation.hasSixCharacters
        ?   <CircleCheck style={bulletStyle}/>
        :   <>&#8226;</>,
        props.passwordValidation.hasCorrectCase
        ?   <CircleCheck style={bulletStyle}/>
        :   <>&#8226;</>,
        props.passwordValidation.hasNumber
        ?   <CircleCheck style={bulletStyle}/>
        :   <>&#8226;</>
    ]
    const passwordBulletsColors = [
        props.passwordValidation.hasSixCharacters? 'green' : 'black',
        props.passwordValidation.hasCorrectCase? 'green' : 'black',
        props.passwordValidation.hasNumber? 'green' : 'black'
    ]

    const bulletSpanStyle = {display: 'inline-block', width: '20px', textAlign: 'center'};
    return (
        <form
            id="register-user-form"
            onSubmit={props.submit}
        >
            <div className={'user-title'}>
                Create an Account
                <span className={'user-title-right'} style={{position: 'relative', top: '5px'}}>
                    <Link
                        className={'title-link'}
                        to={'#'}
                        onClick={props.swapToLogin}
                    >
                        <img src={back_button_img}
                             style={{
                                 height: '16px',
                                 marginBottom: '4px',
                                 marginRight: '5px',
                             }}
                             alt={'Back to Login'}
                        />
                        Login
                    </Link>
                </span>
            </div>

            <label htmlFor="register-email-input">
                Email
            </label>
            <InputErrorContainer error={props.emailWarning} setError={props.setEmailWarning}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={props.email}
                    onChange={props.handleEmailInputChange}
                    ref={props.emailRef}
                />
            </InputErrorContainer>
            <br/>
            <label htmlFor="register-user-input">
                Username <span className='label-optional-tag'>(optional)</span>
            </label>
            <InputErrorContainer error={props.usernameWarning} setError={props.setUsernameWarning}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={props.username}
                    onChange={props.handleUserInputChange}
                    ref={props.usernameRef}
                />
            </InputErrorContainer>
            <br/>
            <label htmlFor="register-user-input">
                Password
            </label>
            <InputErrorContainer
                error={props.passwordWarning}
                setError={props.setPasswordWarning}
                style={{top: 'calc(100% + 8px)'}}
            >
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={props.password}
                    onChange={props.handlePasswordInputChange}
                    ref={props.passwordRef}
                    style={{marginBottom: '0px'}}
                />
            </InputErrorContainer>
            <br/>
            <span id={'register-user-warning'}>
                {props.warning
                    ? <img
                        className='alert-img'
                        src={alert_img}
                        alt={props.warning}
                        style={{marginRight: '5px'}}
                    />
                    : ''}
                {props.warning}
            </span>
            <button
                id={'register-user-button'}
                type="submit"
            >
                Register
            </button>

            <label>
                <input
                    type="checkbox"
                    checked={props.subscribe}
                    onChange={props.handleSubscribeCheck}
                    name="subscribe"
                />
                &nbsp; Send me Illmith news and updates.
            </label>
            <div className={'register-user-infobox'}>
                <div className={'register-user-infobox-left'}>
                    <button
                        type="button"
                        onClick={props.hideModal}
                        className="register-user-cancel-btn"
                    >
                        Cancel
                    </button>
                </div>
                <div className={'register-user-infobox-right'}>
                    Your Password must contain at least:
                    <br/>
                    <span style={{color: passwordBulletsColors[0]}}>
                        <span style={bulletSpanStyle}>{passwordBullets[0]}</span>6 characters
                    </span>
                    <br/>
                    <span style={{color: passwordBulletsColors[1]}}>
                        <span style={bulletSpanStyle}>{passwordBullets[1]}</span>1 upper and lower case letter
                    </span>
                    <br/>
                    <span style={{color: passwordBulletsColors[2]}}>
                        <span style={bulletSpanStyle}>{passwordBullets[2]}</span>1 number
                    </span>

                </div>
            </div>
        </form>
    )
}

export default RegisterUser;
