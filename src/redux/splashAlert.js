import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const initialState = {
    content: cookies.get(''),
    duration: cookies.get(''),
}

export const alert = (content, duration = 'short') => {

    if(duration === 'short') duration = 10000;
    else if(duration === 'medium') duration = 30000;
    else if(duration === 'minute') duration = 60000;
    else if(duration === 'permanent') duration = null;

    return {
        type: 'RAISE_ALERT',
        payload: {content, duration}
    }

};

export const setAlertDuration = (duration) => {
    return {
        type: 'ALERT_DURATION',
        playload: duration
    }
}

export const setAlertContents = (contents) => {
    return {
        type: 'ALERT_CONTENTS',
        playload: contents
    }
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'ALERT_RAISE':
            const {content, duration} = action.payload;
            return {
                content,
                duration
            }
        case 'ALERT_DURATION':
            return {
                ...state,
                duration: action.payload
            };
        case 'ALERT_CONTENTS':
            return {
                ...state,
                content: action.payload
            };
        default: return state;
    }
}
export default reducer;
