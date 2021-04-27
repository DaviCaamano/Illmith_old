import React, {useState} from 'react';
import {useCookies} from 'react-cookie';
//components
import UserMenu from '../../component/header/UserMenu';
import UserMenuBox from '../../component/header/UserMenuBox'
const UserMenuContainer = (props) => {

    const [cookies] = useCookies(['username', 'email'])

    const [menuHovered, setMenuHovered] = useState(false);
    const [childHovered, setChildHovered] = useState(false);

    const OnMenuMouseEnter = () => setMenuHovered(true);
    const OnItemMouseEnter = () => setChildHovered(true);
    const OnMenuMouseLeave = () => {
        setMenuHovered(false);
    }
    const OnItemMouseLeave = () => {
        setChildHovered(false);
    }
    const dropdownItems = [
        {
            to: '#',
            onClick: props.handleLogout,
            text: 'Logout'
        }
    ]

    console.log('cookies')
    console.log(cookies)
    const name = cookies.username && cookies.username !== 'null'? cookies.username: cookies.email.split('@')[0];
    return (
        <div
            id={'user-menu-container'}
            className={' cursor-pointer'}
            onMouseEnter = {OnMenuMouseEnter}
            onMouseLeave={OnMenuMouseLeave}>
            <UserMenuBox name={capitalize(name)} />
            <UserMenu
                visible={childHovered || menuHovered}
                mouseEnter={OnItemMouseEnter}
                mouseLeave={OnItemMouseLeave}
                items={dropdownItems}
            />
        </div>
    )
}

export default UserMenuContainer;

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}