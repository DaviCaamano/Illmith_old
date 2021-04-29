import React from 'react';

const UserMenuBox = (props) => {

    return (
        <>
            <span className={'logged-user-welcome-text'} style={{marginTop: '3px'}}>
                Welcome,
            </span>
            <span
                className={'logged-user-welcome-text'}
                style={{marginTop: '-8px'}}
            >
                &nbsp; &nbsp; {props.name}
            </span>

        </>
    )
}

export default UserMenuBox