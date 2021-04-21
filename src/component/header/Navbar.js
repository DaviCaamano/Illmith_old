import React from 'react';
import {Link, useRouteMatch } from 'react-router-dom';

const Navbar = (props) => {

    const {path} = useRouteMatch();

    return (
        <div>
            {
                props.navElements.map(
                    (element) =>
                        <Link
                            key={element.name}
                            to={element.to}
                            className={`header-element ${element.to === path? 'header-element-current-page': ''}`}
                        >
                            {element.name}&nbsp;
                        </Link>
                )
            }
        </div>

    )
}

export default Navbar;