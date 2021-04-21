import React from 'react';

import './css/App.css';

import { UserContextProvider }  from './context/UserContext';

import Header from './component/header/Header';
import Splash from './container/splash/SplashContainer';
import User from './container/user/UserContainer';
//Components
const App = () =>{


    return  (
        <UserContextProvider>
            <User />
            <Header />
            <Splash />
            <div id="content-plane">
                <div className="canvas">

                </div>
            </div>
        </UserContextProvider>
    );
}


export default App;

