import React, {useEffect, useState} from 'react';
import img_Logo from "../../img/Logo Site.png";

let Splash = (props) => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), [])

    return (
        <div id={'splash-box'}>
            <img id='splash-logo' src={img_Logo} alt={''}/>
            <div
                id={'firstBox'}
                className={'splash'
                    + (props.active === 0? ' splash-active': '')
                    + (mounted? ' add-transition': '')}
                 style={{ backgroundImage: `url("${props.previewImage1}")` }}
            />
            <div
                id={'secondBox'}
                className={'splash'
                    + (props.active === 1? ' splash-active': '')
                    + (mounted? ' add-transition': '')}
                style={{ backgroundImage: `url("${props.previewImage2}")` }}
            />
            {props.children}
        </div>
    )
}

export default Splash;