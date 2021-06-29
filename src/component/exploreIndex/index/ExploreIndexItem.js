import React from 'react';
import {Link} from 'react-router-dom';
//Components
import SquareLoop from "../../../common/borders/squareLoop/SquareLoop";

const ExploreIndexItem = ({title, description, thumbnail, link}) => {

    return (
        <Link className='explore-index-element-link' to={link}>
            <div className='explore-index-element-container'>
                <div className='explore-index-element'>
                    <SquareLoop className='explore-index-element-thumbnail'>
                        <img
                            src={`${process.env.REACT_APP_THUMBNAIL_URL}/${thumbnail}`}
                            alt='explore the world of Sennos'
                        />
                    </SquareLoop>
                    <div className='explore-index-element-body'>
                        <div className='explore-index-element-title'>
                            {title}
                        </div>
                        <div className='explore-index-element-description'>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ExploreIndexItem;