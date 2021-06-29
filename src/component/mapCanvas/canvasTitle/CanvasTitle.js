import React from 'react';

//img
import logo from '../../../resources/img/region canvas/logo.webp';

//data
import regionData from "../data/regionData";

const CanvasTitle = (props) => {

    const banners = [

    ];
    const regionTitles = [
        <img
            key='illmith-logo'
            id='map-canvas-logo'
            className={`map-canvas-title-img${props.hovered? ' hide': ''}`}
            src={logo}
            alt='illmith logo'
        />
    ];
    Object.keys(regionData).forEach(region => {

        const isHovered = props.hovered?.trim() !== regionData[region].id?.trim();
        if(regionData[region].id)
            regionTitles.push(
                <h1
                    key={'title-'+region}
                    className={`map-canvas-title-text${isHovered? ' hide': ''}`}>
                    {regionData[region].label}
                </h1>
            )
        if(regionData[region].banner)
            banners.push(
                <img
                    key={region}
                    className={`map-canvas-title-img nation ${props.hovered !== region? 'hide': ''}`}
                    src={regionData[region]?.banner}
                    alt={regionData[region]?.id}
                />
            )

    })
    return (
        <div id='map-canvas-title'>
            {regionTitles}
            <div id='map-canvas-title-img-container'>
                <div id='map-canvas-title-img-anchor'>
                    {banners}
                </div>
            </div>
        </div>
    )
}

export default CanvasTitle;