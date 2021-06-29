import React  from 'react';

//img
import blank_bg from '../../../resources/img/region flag box/blank.webp';

//data
import regionData from "../data/regionData";


const onMouseEnter = (setHoveredId, id) => {

    setHoveredId(id)
}

const onMouseExit= (hovered, setHoveredId, id) => {

    if(hovered === id)
        setHoveredId('')
}
const Region = (props) =>{

    const visible = props.hovered?.trim() === props.id?.trim();
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1144 806'
            style={visible? {zIndex: '1000'}: {zIndex: '5'}}
        >
            <defs>
                <pattern id={`${props.id}-bg`} patternUnits='userSpaceOnUse' width='1144' height='806'>
                    <image
                        xlinkHref={visible? blank_bg: null}
                        preserveAspectRatio='xMidYMid slice'
                        x={props.bgX || '0'}
                        y={props.bgY || '0'}
                        width={props.bgWidth || '500px'}
                        height={props.bgHeight || '500px'}

                    />
                </pattern>
            </defs>
            <path
                id={props.id}
                className={`map-canvas-path${visible? ' hovered': ''}`}
                d={props.d}
                fill={`url(#${props.id}-bg)`}
                onMouseEnter={() => onMouseEnter(props.setHovered, props.id)}
                onMouseLeave={() => onMouseExit(props.hovered, props.setHovered, props.id)}
            />
        </svg>
    )
}


const Regions = (props) => {

    const regionSvgs = [];
    Object.keys(regionData).forEach(data => regionSvgs.push(
        <Region
            key={'region' + regionSvgs.length}
            {...regionData[data]}
            hovered={props.hovered}
            setHovered={props.setHovered}
        />
    ))
    return <>{regionSvgs}</>
}

export default Regions;


