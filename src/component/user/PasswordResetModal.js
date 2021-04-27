import React from 'react';
import {Link} from "react-router-dom";

const LoginModal = (props) =>{

    return <form
        id="reset-password-form"
        onSubmit={ props.submit }
    >
        <div className={`user-title ${props.stage === 2? 'd-none': ''}`} style={{marginBottom: '25px'}}>
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

        <label className={'reset-password-label'} htmlFor="reset-password-input">
            <b>{props.stage === 2 ? 'Enter your new password' : 'Enter your username or account email'}</b>
        </label>
        <br/>
        <input
            id={'reset-password-input'}
            className={'reset-password-input'}
            type="text"
            placeholder={props.stage === 2 ? 'New Password' : 'Username or account email'}
            name="email"
            required
            value={props.user}
            onChange={props.inputChange}
        />
        <br />
        <span id={'reset-password-warning'}>
            {props.warning}
        </span>
        <button
            id={'reset-password-button'}
            type="submit"
        >
            Request Reset
        </button>

        <div className={`reset-password-infobox ${props.stage === 2? '': 'd-none'}`}>

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
    </form>
}



export default LoginModal;
