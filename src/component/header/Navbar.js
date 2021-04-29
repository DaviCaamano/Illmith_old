import React from 'react';
import {Link, useLocation  } from 'react-router-dom';

const Navbar = (props) => {

    const location = useLocation ();
    return (
        <div id="navbar-links">
            {
                props.navElements.map(
                    (element) =>
                        <Link
                            key={element.name}
                            to={element.external? {pathname: element.to}: element.to}
                            className={`header-element ${element.to === location.pathname? 'header-element-current-page': ''}`}
                            target={element.external? 'blank': ''}
                        >
                            {element.name}&nbsp;
                        </Link>
                )
            }
        </div>

    )
}

export default Navbar;