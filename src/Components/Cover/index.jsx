import React from 'react';
import './style.css';
import cover from './assets/cover.mp4';

function index() {
    return (
        <div id="cover">
            <video id="coverVideo" autoPlay="true" loop muted="true">
                <source src={ cover } type="video/mp4" />
            </video>
            <div className="coverContent">
                <div>
                    <h3>Aways <em>one step</em> ahead.</h3>
                    <h3><em>Join us!</em></h3>
                </div>
            </div>
        </div>
    )
}

export default index
