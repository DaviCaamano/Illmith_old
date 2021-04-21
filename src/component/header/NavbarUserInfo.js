import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

//components
import UserMenuContainer from '../../container/header/UserMenuContainer';

const NavbarUserInfo = (props) => {

    const [cookies] = useCookies(['username', 'firstname', 'lastname', 'user_id', 'email', 'token'])

    return (
        <div id={'navbar-user-widget'} className={`header-element`} >
            { cookies.email && cookies.emails !== 'null'
                ?   //If Logged in
                <UserMenuContainer
                    handleLogout={props.handleLogout}
                    items={props.items}
                />
                :   //If Logged out
                <Link
                    to={'#'}
                    className={`header-element`}
                    onClick={props.raiseLoginModal}
                >
                    <span
                        className={'logged-user-greeting'}
                        style={{lineHeight: '57px'}}
                    >Login</span>
                </Link>
            }
        </div>
    )

}

export default NavbarUserInfo;