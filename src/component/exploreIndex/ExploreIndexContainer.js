import React from 'react';
import {useRouteMatch} from 'react-router-dom';

//data
import itemData from './data/exploreItems'
//Components
import ExploreIndex from "./ExploreIndex";
import ExploreIndexItem from "./index/ExploreIndexItem";

const ExploreIndexContainer = (props) => {

    let { url } = useRouteMatch();

    const items = itemData.map(({title, description, thumbnail, link}) =>
        <ExploreIndexItem key={title} title={title} description={description} thumbnail={thumbnail} link={link}/>
    );
    return (
        <ExploreIndex items={items}/>
    )
}

export default ExploreIndexContainer;