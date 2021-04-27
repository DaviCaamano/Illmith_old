import React, {useState, useEffect, createContext} from 'react';

// import {getCode} from '../data/codes'
const
    TEN_SECONDS = 10000,
    HALF_MINUTE = 30000,
    MINUTE = 60000
const { Provider, Consumer} = createContext({});

const SplashAlertProvider = (props) => {

    //Modal Visibility
    const [visible, setVisible] = useState(false);
    const [content, setContent] = useState('');
    const [duration, setDuration] = useState(0);
    const [closeTimeout, setCloseTimeout] = useState(0);

    const createAlert = (contents, newDuration = TEN_SECONDS) => {

        if(newDuration === 'short') newDuration = TEN_SECONDS;
        else if(newDuration === 'medium') newDuration = HALF_MINUTE;
        else if(newDuration === 'minute') newDuration = MINUTE;
        else if(newDuration === 'permanent' || newDuration === 'perm') newDuration = null;
        setDuration(newDuration);
        setContent(contents)
    }

    useEffect(() => {

        if(content) setVisible(true)
        else setVisible(false)
    }, [content])

    useEffect(() => {

        clearTimeout(closeTimeout);
        if(duration)
            setCloseTimeout(setTimeout(() => {

                setContent(null);
            }, duration))
    }, [duration])

    return (
        <Provider value={{
            createAlert,
            visible,
            setVisible,
            content,
            setContent,
            duration,
            setDuration
        }}>
            {props.children}
        </Provider>
    )

}

export { SplashAlertProvider, Consumer as SplashAlertConsumer };