import React from 'react';

/**
 * @param props
     buttonType [any]:
     value: JSON: {
        confirm: [function],
        cancel: [function],
        confirmText:[string],
        cancelText: [string]
    }
         description: creates a modal with a pair of buttons, one representing confirm, the other cancel.
         Must be paired with buttonType.confirm and buttonType.cancel.
         Option props: buttonType.buttonText, buttonType.cancelText
         buttonType.confirm [function]:
            A function to run when the confirm button is clicked.
        buttonType.cancel [function]
            A function to run when the cancel button is clicked.
        buttonType.confirmText [string] (optional)
            The text displayed on the confirm button.
        buttonType.cancelText [string] (optional)
            The text displayed on the cancel button.
     value: array: [any array]
        description: Creates a modal with a customizable number of buttons.
        Each element of the array must be a JSON with the following attributes:
        onClick [function]
            Function to run when the button created by this array element.
        dismisser [boolean] (optional)
            Clicking a button with the dismisser flag set closes the modal.
        text [string]
            The text displayed on the button create by this array element.
    value: null or undefined
        A single button will be created. The button will close the modal.
        Good for simple alert prompts.
 * @returns {JSX.Element}
 * @constructor
 */
const AlertContent = (props) => {

    const { buttonType } = props;
    let button;

    if(Array.isArray(buttonType)){

        button = buttonType.map((item, index, array) => {
            let inputProps = {};
            if(item.onClick) inputProps.onClick = item.onClick;
            if(item.dismisser) inputProps.onClick = props.close;
            else if(item.onClick){
                inputProps.onClick = item.onClick;
            }
            inputProps.style = index < array.length - 1? { marginLeft: '33%'}: {}
            if(item.style) inputProps.style = { ...inputProps.style, ...item.style};
            return (
                <button {...inputProps}>item.text</button>
            )
        });
    }
    else if(typeof buttonType === 'object') {
        button = (
            <div>
                <button
                    onClick={buttonType.confirm}
                    style={{marginRight: '33%'}}
                >
                    {buttonType.confirmText || 'Okay'}
                </button>
                <button
                    onClick={buttonType.confirm}
                >{buttonType.cancelText || 'Cancel'}</button>
            </div>
        )
    }
    else {

        button = <button onClick={props.close}>Dismiss</button>
    }

    return (
        <>
            <div className='alert-content'>
                {props.content}
            </div>

            <div className='alert-button-container'>
                {button}
            </div>

        </>
    )
}

export default AlertContent;