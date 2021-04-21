import React from 'react';
import horizontalFrameBarImg from '../../img/Horizontal Frame Bar.jpg';

 const HorizontalFrameBar = (props) =>
     <div className={'horizontal-frame-bar'}
          style={{
            background: `url("${horizontalFrameBarImg}")`,
            ...props.styleElements
          }} />;
export default HorizontalFrameBar