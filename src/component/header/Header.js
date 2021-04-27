import React from 'react';
import '../../css/Header.css';
/**
 * DAVI YOU GOTTA IMPLEMENT THE FOLLOWING
 *      xxxxx - WRONG PASSWORD HANDLING
 *      xxxxx - A REGISTER BUTTON
 *      xxxxx - A REGISTER PAGE
 *      REGISTER FUNCTIONALITY
 *      ADD DISMISS WHEN CLICKING OUTSIDE MODALS
 *      xxxxx CREATE CUSTOM ALERT MODAL
 *          See
 *              xxxxx CompleteUserRegistration,
 *              xxxxx completeResetPassword,
 *              xxxxx passwordResetContainer,
 *              xxxxx RegisterUserModal,
 *              xxxxx UserContext
 *      Store only token in cookies, get login information on site first load
 *          then pass to redux
 *      xxxxx -FORGOT PASSWORD FUNCTIONALITY
 *      xxxxx - MAKE THE GREETING USE AN EMAIL BEFORE @ IF NO USERNAME IS PROVIDED
 *          ie: WELCOME DaviSantaCaamano
 *      Go to bookmark for setCustomValidity(); add it to the error reporting in login and register user.
 *      SETUP FOREIGN KEYS
 *      Replace Back Link in Register and forgot password with an image.
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