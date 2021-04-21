import React from 'react';
import {Link} from "react-router-dom";

const LoginModal = (props) =>
    <form
        className="login-form"
        onSubmit={ props.submit }
    >
        <div className={'user-title'}>
            <b>Login</b>
            <b className={'user-title-right'}>
                ...or
                <Link
                    className={'title-link'}
                    to={'#'}
                    onClick={props.swapToRegistration}
                >
                    &nbsp;Sign Up
                </Link>
            </b>
        </div>

        <label className={'login-label'} htmlFor="login-username-input">
            <b>Username or Email</b>
        </label>
        <input
            id={'login-username-input'}
            className={'login-input'}
            type="text"
            placeholder="Username or Email"
            name="username"
            required
            value={props.user}
            onChange={props.handleUserInputChange}
        />

        <label className={'login-label'} htmlFor="login-password-input">
            <b>Password</b>
        </label>
        <input
            id={'login-password-input'}
            className={'login-input'}
            type="password"
            placeholder="Password"
            name="password"
            required
            value={props.password}
            onChange={props.handlePasswordInputChange}
        />

        <span id={'login-warning'}>
            {props.warning}
        </span>
        <button
            id={'login-button'}
            type="submit"
        >
            Login
        </button>

        <label className={'login-label'} >
            <input
                type="checkbox"
                checked={props.remember}
                onChange={props.handleRememberCheck}
                name="remember"
            />&nbsp;Remember me
        </label>

        <div  style={{'backgroundColor' : '#f1f1f1', padding: '16px'}}>
            <button
                type="button"
                onClick={props.hideModal}
                className="login-cancel-btn"
            >
                Cancel
            </button>

            <span className="psw">
                <Link to="#">Forgot password?</Link>
            </span>
        </div>
    </form>


export default LoginModal;
