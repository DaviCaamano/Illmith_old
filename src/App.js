import React from 'react';

import './css/App.css';

import { UserContextProvider }  from './context/UserContext';
import { SplashAlertProvider }  from './context/SplashAlertContext';
import { AlertProvider }  from './context/AlertContext';

import Header from './component/header/Header';
import Splash from './container/splash/SplashContainer';
import User from './container/user/UserContainer';
import Alert from './container/modal/AlertContainer';
//Components
const App = () =>{


    return  (
        <UserContextProvider>
            <AlertProvider>
                <SplashAlertProvider>
                    <Alert />
                    <User />
                    <Header />
                    <Splash />
                    <div id="content-plane">
                        <div className="canvas">

                        </div>
                    </div>
                </SplashAlertProvider>
            </AlertProvider>
        </UserContextProvider>
    );
}


export default App;

