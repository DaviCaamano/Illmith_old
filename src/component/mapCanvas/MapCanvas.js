import React, {useState} from 'react';

//Components
import Regions from "./Regions/Regions";
import CanvasTitle from "./canvasTitle/CanvasTitle";
import download from "../../resources/img/download.svg";

const MapCanvas = () => {

    const [hovered, setHovered] = useState('')

    return (
        <>
            <div id='map-canvas-container'>
                <div id='map-canvas'>
                    <div id='map-canvas-border' />
                    <Regions hovered={hovered} setHovered={setHovered}/>
                    <CanvasTitle hovered={hovered} setHovered={setHovered} />
                </div>
            </div>
            <div id='map-canvas-download-button-containers'>
                <span id='map-canvas-download-button-label'>Download:</span>
                <button className='map-canvas-download-button'>
                    <img src={download}
                         style={{
                             height: '14px',
                             marginRight: '5px',
                         }}
                         alt={'Back to Login'}
                    />
                    2288 x 1613
                </button>
                <button className='map-canvas-download-button'>
                    <img src={download}
                         style={{
                             height: '14px',
                             marginRight: '5px',
                         }}
                         alt={'Back to Login'}
                    />
                    4575 x 3225
                </button>

            </div>

        </>
    )
}

export default MapCanvas;