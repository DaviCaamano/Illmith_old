import React, {useState} from 'react';

//components
import UserMenu from '../../component/header/UserMenu';
import UserMenuBox from '../../component/header/UserMenuBox'
const UserMenuContainer = (props) => {

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

    return (
        <div
            id={'user-menu-container'}
            className={' cursor-pointer'}
            onMouseEnter = {OnMenuMouseEnter}
            onMouseLeave={OnMenuMouseLeave}>
            <UserMenuBox name={capitalize(props.name)} />
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