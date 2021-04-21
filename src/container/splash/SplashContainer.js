import React, { useState, useEffect } from 'react';
import previews from '../../data/mapPreviews';
import '../../css/Splash.css';
import Splash from '../../component/splash/Splash';
import HorizontalFrameBar from '../../component/splash/HorizontalBarFrame';
const FIVE_MINUTES = 5000;
const FIVE_SECONDS = 3000;



/**
    A splash screen for the news page.
    The screen is a div which displays a background image. Meant to be large and screen wide.
    Two div on top of each other swap being visible or not. Allowing fade transition to be used as we switch between them.
    On top of that, their images have to be update before they come back to being visible again so we can move through
    a list of images one after the other.
 */
const SplashContainer = (props) => {

    /**
     * activeIndex: which of the two divs will be shown.
     * firstBackgroundIndex: The index of the previewArray that the first div is supposed to set their background to.
     * secondBackgroundIndex: The index of the previewArray that the second div is supposed to set their background to.
     */
    const [activeIndex, setActiveIndexes] = useState( 1)
    const [firstBackgroundIndex, SetFirstBackgroundIndex] = useState(0)
    const [secondBackgroundIndex, SetSecondBackgroundIndex] = useState( 1)


    /**
     * Make one Splash Div invisible and the other visible.
     */
    const switchSplashDivs = () => {

        setActiveIndexes((index) => index === 0? 1: 0);
    }
    /**
     * Switch the background of the div that is current not visible after.
     */
    const switchNonVisibleBackground = () => {

        setActiveIndexes(index => {

            if(index === 0)
                SetSecondBackgroundIndex(secondIndex => (secondIndex + 2) % previews.length)
            else
                SetFirstBackgroundIndex(secondIndex => (secondIndex + 2) % previews.length)

            return index;
        })

    }

    /**
     * intervals for changing visibility of divs and backgrounds.
     */
    useEffect(() => {

        setInterval(switchSplashDivs, FIVE_MINUTES)

        setTimeout(() =>{

            setInterval(switchNonVisibleBackground, FIVE_MINUTES)
        }, FIVE_SECONDS)

    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return(
            <Splash
                active={activeIndex}
                previewImage1={previews[firstBackgroundIndex]}
                previewImage2={previews[secondBackgroundIndex]}
            >
                <HorizontalFrameBar styleElements={{ top: -5, filter: 'drop-shadow(0px 3px 4px black)'  }} />
                <HorizontalFrameBar styleElements={{ bottom:0, filter: 'drop-shadow(0px 3px 4px black)'  }} />
            </Splash>

    );
}

export default SplashContainer;