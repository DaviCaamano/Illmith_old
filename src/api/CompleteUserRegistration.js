import {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';

const CompleteUserRegistration = (props) => {

    // const history = useHistory();
    const { token } = useParams();
    const history = useHistory();

    const sendRegistrationToken = () => {

        axios({
            method: 'post',
            url:  process.env.REACT_APP_API_URL + '/users/register',
            data: { token }
        }).then((resp) => {

            let data = resp.data;
            props.setLoginCookies(data.email, data.userId, data.username, data.token, data.tokenExpiration);
            history.push('/');
        }).catch((err) => {

            ///ALERT GOES HERE
            ///ALERT GOES HERE
            ///ALERT GOES HERE
            ///ALERT GOES HERE
            ///ALERT GOES HERE
            console.log(err.response);
            history.push('/');
        })
    }

    useEffect(sendRegistrationToken, [sendRegistrationToken])

    return null;
}

export default CompleteUserRegistration;