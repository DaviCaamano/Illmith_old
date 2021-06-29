import React from 'react';
import {Route, Switch} from "react-router-dom";

//Global css
import './App.css';
import './Markdown.css';
import './Article.css';
import './DarkFrame.css'

//Scenes
import User from '../scene/User';
import Article from "../scene/Article";
import Explore from "../scene/Explore";
//Context
import { UserContextProvider }  from '../context/UserContext';
import { AlertProvider }  from '../context/AlertContext';

//Components
import Header from '../component/header/Header';
import Body from '../component/body/Body';
import Footer from "../component/footer/Footer";
import Temp from '../component/temp/Temp'

//Containers
import Splash from '../component/splash/SplashContainer';
import Alert from '../component/alert/Alert';

const App = () =>{

    return  (
        <div id='app'>
            <div className='body-bg left'/>
            <div className='body-bg right'/>
            <AlertProvider>
            {(alert) =>
                <UserContextProvider alert={alert.alert}>
                    <Header
                        navVisible={alert.navVisible}
                        setNavVisible={alert.setNavVisible}
                        navContent={alert.navContent}
                        setNavContent={alert.setNavContent}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Splash />
                        </Route>
                    </Switch>
                    <Body>
                        <Switch>
                            <Route exact path="/">
                                <Temp />
                            </Route>
                            <Route path='/world'>
                                <div className="content-plane">
                                    <Article />
                                </div>
                            </Route>
                            <Route path='/explore'>
                                <Explore />
                            </Route>
                        </Switch>
                    </Body>
                    <Footer/>
                    <User />
                    <Alert />
                </UserContextProvider>
            }
            </AlertProvider>
        </div>
    );
}


export default App;

