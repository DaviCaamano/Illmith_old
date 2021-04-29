const initialState = {
    username: '',
    email: '',
}

export const login = (email, username) => {

    return {
        type: 'USER_LOGIN',
        payload: {email, username}
    }

};

export const logout = () => {

    return {
        type: 'USER_LOGIN',
        payload: {}
    }
}


const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'USER_LOGIN':
            const {email, username} = action.payload;
            return {
                email: email? email: null,
                username: username? username: null
            }
        default: return state;
    }
}
export default reducer;
