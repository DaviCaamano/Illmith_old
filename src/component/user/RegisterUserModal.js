import React from 'react';
import {Link} from "react-router-dom";

const RegisterUserModal = (props) =>
    <form
        id="register-user-form"
        onSubmit={ props.submit }
    >
        <div className={'user-title'}>
            <b>Create an Account</b>
            <b className={'user-title-right'}>
                <Link
                    className={'title-link'}
                    to={'#'}
                    onClick={props.swapToLogin}
                >
                    &lt; Login
                </Link>
            </b>
        </div>

        <label className={'register-user-label'} htmlFor="register-email-input">
            <b>Email</b>
        </label>
        <span style={{color: 'red', display: props.emailWarning? 'inline': 'none'}}>
            &nbsp;&nbsp;Invalid Email address
        </span>
        <br/>
        <input
            id={'register-email-input'}
            className={'register-user-input'}
            type="text"
            placeholder="Email"
            name="email"
            required
            value={props.email}
            onChange={props.handleEmailInputChange}
        />

        <label className={'register-user-label'} htmlFor="register-user-input">
            <b>Username</b> (optional)
        </label>
        <span style={{ color: 'red' }}>
            &nbsp;&nbsp;{ props.usernameWarning }
        </span>
        <br/>
        <input
            id={'register-user-input'}
            className={'register-user-input'}
            type="text"
            placeholder="Username"
            name="username"
            value={props.username}
            onChange={props.handleUserInputChange}
        />
        <br/>
        <label className={'register-user-label'} htmlFor="register-user-input">
            <b>Password</b>
        </label>
        <br/>
        <input
            id={'register-user-input'}
            className={'register-user-input'}
            type="password"
            placeholder="Password"
            name="password"
            required
            value={props.password}
            onChange={props.handlePasswordInputChange}
        />
        <br/>

        <span id={'register-user-warning'}>
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
