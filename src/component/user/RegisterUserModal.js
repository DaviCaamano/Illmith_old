import React from 'react';
import {Link} from "react-router-dom";
import back_button_img from "../../img/back button.png";
import alert_img from "../../img/Exclamation Alert.png";

//#0050a5
const RegisterUserModal = (props) =>
    <form
        id="register-user-form"
        onSubmit={ props.submit }
    >
        <div className={'user-title'}>
            Create an Account
            <span className={'user-title-right'}>
                <Link
                    className={'title-link'}
                    to={'#'}
                    onClick={props.swapToLogin}
                >
                    <img src={back_button_img}
                         style={{
                            height: '16px',
                            marginBottom: '3px'
                        }}
                        alt={'Back to Login'}
                    />
                    Login
                </Link>
            </span>
        </div>

        <label className={'register-user-label'} htmlFor="register-email-input">
            Email
        </label>
        <span className={`d-block warning-text`}>
            &nbsp;&nbsp;{props.emailWarning? <img className='alert-img' src={alert_img} alt={props.emailWarning}/>: ''}
            {props.emailWarning}
        </span>
        <input
            className={'register-user-input'}
            type="text"
            placeholder="Email"
            name="email"
            required
            value={props.email}
            onChange={props.handleEmailInputChange}
            ref={props.emailRef}
        />
        <br />
        <label className={'register-user-label'} htmlFor="register-user-input">
            Username <span className='label-optional-tag'>(optional)</span>
        </label>
        <span className={`d-block warning-text`}>
            &nbsp;&nbsp;{props.usernameWarning
                ? <img className='alert-img' src={alert_img} alt={props.usernameWarning}/>
                : ''
            }
            {props.usernameWarning}
        </span>
        <input
            className={'register-user-input'}
            type="text"
            placeholder="Username"
            name="username"
            value={props.username}
            onChange={props.handleUserInputChange}
            ref={props.usernameRef}
        />
        <br />
        <label className={'register-user-label'} htmlFor="register-user-input">
            Password
        </label>
        <input
            className={'register-user-input'}
            type="password"
            placeholder="Password"
            name="password"
            required
            value={props.password}
            onChange={props.handlePasswordInputChange}
            ref={props.passwordRef}
            style={{ marginBottom: '0px'}}
        />
        <br />
        <span id={'register-user-warning'}>
            {props.warning? <img className='alert-img' src={alert_img} alt={props.warning}/>: ''}
            {props.warning}
        </span>
        <button
            id={'register-user-button'}
            type="submit"
        >
            Register
        </button>

        <label className={'register-user-label'} >
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
                <span style={{color: props.passwordValidation.hasSixCharacters? 'green': 'black'}}>
                    &nbsp;&nbsp;&#8226;&nbsp;6 characters
                </span>
                <br/>
                <span style={{color: props.passwordValidation.hasCorrectCase? 'green': 'black'}}>
                    &nbsp;&nbsp;&#8226;&nbsp;1 upper and lower case letter
                </span>
                <br/>
                <span style={{color: props.passwordValidation.hasNumber? 'green': 'black'}}>
                    &nbsp;&nbsp;&#8226;&nbsp;1 number
                </span>

            </div>
        </div>
    </form>


export default RegisterUserModal;
