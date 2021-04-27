import React, {useState, useEffect, createContext} from 'react';

//Contexts
const { Provider, Consumer} = createContext({});

const AlertProvider = (props) => {

    //Modal Visibility
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [visible, setVisible] = useState(false);
    const [content, setContent] = useState('');
    const [buttonType, setButtonType] = useState('');

    const close = () => {

        setVisible(false);
    }

    const alert = (modalContent, type, height, width) => {

        if(height) setHeight(height);
        if(width) setWidth(width);
        setButtonType(type);
        setContent(modalContent);
        setVisible(true);
    }

    return (
        <Provider value={{
            visible,
            setVisible,
            content,
            setContent,
            height,
            setHeight,
            width,
            setWidth,
            buttonType,
            setButtonType,
            close,
            alert,
        }}>
            {props.children}
        </Provider>
    )
}

export { AlertProvider, Consumer as AlertConsumer };