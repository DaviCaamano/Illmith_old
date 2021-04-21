import React from 'react';
import '../../css/Header.css';
/**
 * DAVI YOU GOTTA IMPLEMENT THE FOLLOWING
 *      xxxxx - WRONG PASSWORD HANDLING
 *      xxxxx - A REGISTER BUTTON
 *      xxxxx - A REGISTER PAGE
 *      REGISTER FUNCTIONALITY
 *      ADD DISMISS WHEN CLICKING OUTSIDE MODALS
 *      CREATE CUSTOM ALERT MODAL
 *          See CompleteUserRegistration, RegisterUserModal
 *      FORGOT PASSWORD FUNCTIONALITY
 *      xxxxx - MAKE THE GREETING USE AN EMAIL BEFORE @ IF NO USERNAME IS PROVIDED
 *          ie: WELCOME DaviSantaCaamano
 *      Go to bookmark for setCustomValidity(); add it to the error reporting in login and register user.
 *      SETUP FOREIGN KEYS
 */
//img
import storystringLogo from '../../img/Storystring Logo White.png'

import NavbarContainer from '../../container/header/NavContainer'

const Header = (props) => {

    return (
        <div id="header">
            <img id="storystring-logo" src={storystringLogo} alt={''}/>
            <NavbarContainer/>
        </div>
    )
}

export default Header;