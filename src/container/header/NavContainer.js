import React from 'react';

//data
import navElements from '../../data/navbarElements';

//components
import Navbar from '../../component/header/Navbar';
import NavbarUserInfo from '../../component/header/NavbarUserInfo';

//context
import {UserContextConsumer} from '../../context/UserContext';

const NavbarContainer = (props) => {

    return (
        <>
            <Navbar navElements={navElements} />
            <UserContextConsumer>
                {({raiseLoginModal, handleLogout}) =>
                    <NavbarUserInfo
                        raiseLoginModal={raiseLoginModal}
                        handleLogout={handleLogout}
                    >
                        <span>Logout</span>
                    </NavbarUserInfo>
                }
            </UserContextConsumer>
        </>
    );
}
export default NavbarContainer;

