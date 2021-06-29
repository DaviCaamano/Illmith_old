import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
//css
import './css/Explore.css';

//Components
import ExploreIndexContainer from "../component/exploreIndex/ExploreIndexContainer";
import MapCanvas from "../component/mapCanvas/MapCanvas";

const Explore = () => {

    let { path } = useRouteMatch();
    return (
        <div className="content-plane">
            <Switch>
                <Route exact path={`${path}/`}>
                        <ExploreIndexContainer />
                </Route>
                <Route path={`${path}/map-of-illmith`}>
                        <MapCanvas />
                </Route>
            </Switch>
        </div>
    )
}

export default Explore;