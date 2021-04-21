import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
//import {getCode} from "../../data/codes";
const CompleteUserRegistration = (props) => {

    // const history = useHistory();
    const { token } = useParams();
    const history = useHistory();
    useEffect(() => {


        axios({
            method: 'post',
            url:  process.env.REACT_APP_API_URL + '/users/register',
            data: { token }
        }).then((resp) => {

            let data = resp.data;
            props.setLoginCookies(data.email, data.userId, data.username, data.token, data.tokenExpiration);
            history.push('/');
        }).catch((err) => {

            ////////THIS IS WHERE AN ALERT WOULD GO
            console.log(err.response);
            history.push('/');
        })
    }, [])


    return <div></div>
}

export default CompleteUserRegistration;