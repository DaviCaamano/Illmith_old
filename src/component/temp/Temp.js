import React from 'react';

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
            <br/>
            <br/>
            <h2 style={{fontSize: '36px'}}>
                Prospective hiring parties, this site is produced by Davi Caamano who serves as
                the fullstack developer and sole author for this project (<span style={{color: 'red'}}>React Js/Node js/MYSQL</span>).
            </h2>

            <br/>
            <br/>
            <h3>
                This site is a passion project leading up to a Kickstarter to market
                and sell a real table top RPG product.
            </h3>
        </div>

    )
}

export default Temp;