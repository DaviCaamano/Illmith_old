import React from 'react';
import {Link} from 'react-router-dom';
const Temp = () => {

    return (
        <div className="content-plane">
            <h1 style={{
                display: 'inline-block',
                width: '100%',
                textAlign: 'center'
            }}>
                Welcome to Illmith's landing page.
            </h1>
            <h2 style={{
                display: 'inline-block',
                width: '100%',
                textAlign: 'center'
            }}>
                The Site you are about to see is in development.
            </h2>
            <br/>
            <h2 style={{fontSize: '34px'}}>
                Prospective hiring parties, this site is produced by Davi Caamano who serves as
                the fullstack developer and sole author for this project.
            </h2>
            <h2 style={{fontSize: '44px', display: 'inline-block', width: '100%', textAlign: 'center'}}>
                (<span style={{color: '#cab260'}}>React Js/Node js/MYSQL</span>)
            </h2>
            <br/>
            <br/>
            <h3>
                This site is a passion project leading up to a Kickstarter to market
                and sell a real table top RPG product.
            </h3>
            <br />
            <br />
            <br />
            <table style={{width: '66%', marginLeft: '16.5%'}}>
                <thead>
                    <tr>
                        <th style={{width: '33%'}}>
                            <Link
                                style={{color: 'rgb(169 147 74)'}}
                                to={{pathname: 'https://github.com/DaviCaamano/Illmith'}}
                                target="_blank"
                            >
                                <h4>Frontend Repository</h4>
                            </Link>
                        </th>
                        <th style={{width: '33%', textAlign: 'center'}}>
                            <Link
                                style={{color: 'rgb(169 147 74)'}}
                                to={{pathname: 'https://github.com/DaviCaamano/Illmith-admin'}}
                                target="_blank"
                            >                                <h4>Admin Repository</h4>
                            </Link>
                        </th>
                        <th style={{width: '33%', textAlign: 'right'}}>
                            <Link
                                style={{color: 'rgb(169 147 74)'}}
                                to={{pathname: 'https://github.com/DaviCaamano/Illmith-api'}}
                                target="_blank"
                            >                                <h4>Backend Repository</h4>
                            </Link>
                        </th>
                    </tr>
                </thead>
            </table>



        </div>

    )
}

export default Temp;