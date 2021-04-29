import React, {useState, createContext} from 'react';

//Contexts
const { Provider, Consumer} = createContext({});

const AlertProvider = (props) => {

    //Modal Visibility
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [visible, setVisible] = useState(false);
    const [content, setContent] = useState('');
    const [buttonInfo, setButtonInfo] = useState({});

    const close = () => {

        setVisible(false);
    }

    /**
     @params
     modalContent: [text or JSX]: content to be displayed on Alert.
     type [any]: The following is a numbered list for the types of values you can enter for type
                Each focuses on changing the type of buttons that will display with the alert.
         (1)value: JSON: {
            confirm: [function],
            cancel: [function],
            confirmText:[string] (optional),
            cancelText: [string] (optional)
        }
            description: creates a modal with a pair of buttons, one representing confirm, the other cancel.
            Must be paired with buttonType.confirm and buttonType.cancel.
            (required) buttonType.confirm [function]:
                A function to run when the confirm button is clicked.
            (required) buttonType.cancel [function]
                A function to run when the cancel button is clicked.
            (optional) buttonType.confirmText [string]
                The text displayed on the confirm button.
            (optional) buttonType.cancelText [string]
                The text displayed on the cancel button.
     * @returns {JSX.Element}
     * @constructor
     */


    /**
     * A confirm prompt which accepts functions for confirm and cancel.
     * These functions are required.
     * @param modalContent [String or JSX]: Displayed in the alert modal.
     * @param confirm [function]: Runs on confirm button click. Closes modal after pressed.
     * @param cancel [function]: Runs on cancel button click. Closes modal after pressed.
     * @param confirmText [string] (Optional): String to replace 'Okay' on confirm button. If null text display okay.
     * @param cancelText [string] (Optional): String to replace 'Cancel' on cancel button. If null text display okay.
     * @param height - Fixed height of the modal.
     * @param width - Fixed width of the modal.
     */
    const confirm = (modalContent, confirm, cancel, confirmText, cancelText, height, width) => {

        if(height) setHeight(height);
        if(width) setWidth(width);
        setButtonInfo({
            confirm,
            cancel,
            confirmText,
            cancelText
        });
        setContent(modalContent);
        setVisible(true);
    }

    /**
     * A simply prompt with a single button labeled "dismiss".
     * @param modalContent: [String or JSX] - Displayed in the alert modal.
     * @param height - Fixed height of the modal.
     * @param width - Fixed width of the modal.
     */
    const alert = (modalContent, height, width) => {

        if(height) setHeight(height);
        if(width) setWidth(width);
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
            buttonInfo,
            setButtonInfo,
            close,
            alert,
            confirm,
        }}>
            {props.children}
        </Provider>
    )
}

export { AlertProvider, Consumer as AlertConsumer };