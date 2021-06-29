import React from 'react';

//css
import '../Borders.css'

const SquareLoop = ({children, className, style}) => {

    return (
        <div className={`square-loop-container ${className}`} style={style} >
            <div className='square-loop' />
            {children}
        </div>
    )
}

export default SquareLoop;