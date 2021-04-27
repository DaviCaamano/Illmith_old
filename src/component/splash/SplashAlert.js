import React from 'react';

const SplashAlert = (props) => {

    return (
        <div id="splash-alert-container" >
            <div id="splash-alert-background-container">
                <div id="splash-alert-background" />
            </div>
            <div id="splash-alert-content">
                {props.content}
            </div>
        </div>
    )
}

export default SplashAlert;