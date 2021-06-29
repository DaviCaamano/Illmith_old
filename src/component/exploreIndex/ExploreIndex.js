import React from 'react';

//Components
import Quote from "../../common/quote/Quote";
const ExploreIndex = ({items}) => {

    return (
        <div className='explore-index'>
            <Quote>
                <p>You'll see it when you've seen enough,
                    there is no Illmith.</p>
                <p>Just the torn seems of places sown together what has no business being so.</p>
                <p>A river flowing through a broken damn.</p>
            </Quote>
            {items}
        </div>
    )
}

export default ExploreIndex;